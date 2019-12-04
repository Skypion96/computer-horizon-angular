import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CreateUserService} from '../../../services/create-user.service';
import {Subscription} from 'rxjs';
import {ProcDTO} from '../../../interfaces/procDTO';
import {CreateProcService} from '../../../services/create-proc.service';
import {ProcServiceService} from '../../../services/proc-service.service';
import {CreateCarteGService} from '../../../services/create-carte-g.service';
import {CarteGServiceService} from '../../../services/carte-gservice.service';
import {CarteGDTO} from '../../../interfaces/carte-gDTO';
import {CreateDisqueDService} from '../../../services/create-disque-d.service';
import {DisqueDServiceService} from '../../../services/disque-dservice.service';
import {DisqueDDTO} from '../../../interfaces/disque-dDTO';
import {CreateOrdiService} from '../../../services/create-ordi.service';
import {OrdiServiceService} from '../../../services/ordi-service.service';
import {OrdiDTO} from '../../../interfaces/ordiDTO';

@Component({
  selector: 'app-ajout-component',
  templateUrl: './ajout-component.component.html',
  styleUrls: ['./ajout-component.component.css']
})
export class AjoutComponentComponent implements OnInit {

  readonly AJOUTPROC:string="AjoutProc";
  readonly ADMIN:string ="Admin";


  form: FormGroup = this.fb.group({
    nom : this.fb.control('', Validators.required),
    marque : this.fb.control('', Validators.required),
    nbCoeurs : this.fb.control('', Validators.required),
    frequence : this.fb.control('', Validators.required),
    prix : this.fb.control('', Validators.required),
    qte : this.fb.control('', Validators.required),
    img : this.fb.control('', Validators.required),
  });

  constructor(public fb: FormBuilder,public fbCG: FormBuilder, public streamUserCreated: CreateProcService,
              public procService:ProcServiceService, public streamCGCreated: CreateCarteGService,
              public carteGService:CarteGServiceService,public fbDD: FormBuilder,
              public streamDDCreated: CreateDisqueDService,public disqueDService:DisqueDServiceService,
              public fbOrdi: FormBuilder, public streamOrdiCreated: CreateOrdiService,public ordiService:OrdiServiceService) { }

  ngOnInit() {
    this.listenStreamProcCreated();
    this.listenStreamCGCreated();
    this.listenStreamDDCreated();
    this.listenStreamOrdiCreated();
  }

  createProc($event: any) {
    this.streamUserCreated.notify(this.buildUser());
    this.form.reset();
  }

  private listenStreamProcCreated():void{
    const sub : Subscription = this.streamUserCreated.$procCreated.subscribe(users=>this.createdProc(users));
  }

  private buildUser():ProcDTO {
    return {
      nom:this.form.get("nom").value,
      marque:this.form.get("marque").value,
      nbCoeurs:this.form.get("nbCoeurs").value,
      frequence:this.form.get("frequence").value,
      prix:this.form.get("prix").value,
      qte:this.form.get("qte").value,
      img:this.form.get("img").value,
      reduction:0,
      cote:0,
      dateCote:"00/00/00",
      prixReduc:0.00,
    };
  }

  private createdProc(proc:ProcDTO){
      const sub = this.procService.post(proc).subscribe(proc => console.log());
  }


  /////////////////////////////////////////////////////////



  formCG: FormGroup = this.fbCG.group({
    nomCG : this.fbCG.control('', Validators.required),
    marqueCG : this.fbCG.control('', Validators.required),
    prixCG : this.fbCG.control('', Validators.required),
    frequenceCG : this.fbCG.control('', Validators.required),
    memoireVideoCG : this.fbCG.control('', Validators.required),
    qteCG : this.fbCG.control('', Validators.required),
    imgCG : this.fbCG.control('', Validators.required),
  });



  createCG($event: any) {
    this.streamCGCreated.notify(this.buildCG());
    this.formCG.reset();
  }

  private listenStreamCGCreated():void{
    const sub : Subscription = this.streamCGCreated.$carteGCreated.subscribe(users=>this.createdCG(users));
  }

  private buildCG():CarteGDTO {
    return {
      nom:this.formCG.get("nomCG").value,
      marque:this.formCG.get("marqueCG").value,
      prix:this.formCG.get("prixCG").value,
      frequence:this.formCG.get("frequenceCG").value,
      memoireVideo:this.formCG.get("memoireVideoCG").value,
      qte:this.formCG.get("qteCG").value,
      img:this.formCG.get("imgCG").value,
      prixReduc:0.00,
    };
  }

  private createdCG(cg:CarteGDTO){
    const sub = this.carteGService.post(cg).subscribe(proc => console.log());
  }

  //////////////////////////////////////////////////////
  private _ssdbool:boolean=false;

  formDD: FormGroup = this.fbDD.group({
    nomDD : this.fbDD.control('', Validators.required),
    marqueDD : this.fbDD.control('', Validators.required),
    capaciteDD : this.fbDD.control('', Validators.required),
    ssdDD : this.fbDD.control(''),
    prixDD : this.fbDD.control('', Validators.required),
    interneDD : this.fbDD.control(''),
    qteDD : this.fbDD.control('', Validators.required),
    imgDD : this.fbDD.control('', Validators.required),
  });


  get ssdbool(): boolean {
    return this._ssdbool;
  }

  set ssdbool(value: boolean) {
    this._ssdbool = value;
  }

  createDD($event: any) {
    console.log(this.formDD.get("ssdDD").value);
    this.streamDDCreated.notify(this.buildDD());
    this.formDD.reset();
  }

  private listenStreamDDCreated():void{
    const sub : Subscription = this.streamDDCreated.$disqueDCreated.subscribe(users=>this.createdDD(users));
  }

  private buildDD():DisqueDDTO {
      return {
        nom:this.formDD.get("nomDD").value,
        marque:this.formDD.get("marqueDD").value,
        capacite:this.formDD.get("capaciteDD").value,
        ssd:this.formDD.get("ssdDD").value,
        prix:this.formDD.get("prixDD").value,
        interne:this.formDD.get("interneDD").value,
        qte:this.formDD.get("qteDD").value,
        img:this.formDD.get("imgDD").value,
        prixReduc:0.00,
      };
  }

  private createdDD(dd:DisqueDDTO){
    const sub = this.disqueDService.post(dd).subscribe(proc => console.log());
  }

  /////////////////////////////////////////////////////////////////////////////

  formOrdi: FormGroup = this.fbOrdi.group({
    nomOrdi : this.fbOrdi.control('', Validators.required),
    marqueOrdi : this.fbOrdi.control('', Validators.required),
    prixOrdi : this.fbOrdi.control('', Validators.required),
    nomProcOrdi : this.fbOrdi.control('', Validators.required),
    nomCgOrdi : this.fbOrdi.control('', Validators.required),
    capaciteOrdi : this.fbOrdi.control('', Validators.required),
    memoireVOrdi : this.fbOrdi.control('', Validators.required),
    ssdOrdi : this.fbOrdi.control('', Validators.required),
    descriptionOrdi : this.fbOrdi.control('', Validators.required),
    qteOrdi : this.fbOrdi.control('', Validators.required),
    capaciteSsdOrdi : this.fbOrdi.control('', Validators.required),
    imgOrdi : this.fbOrdi.control('', Validators.required),
  });

  createOrdi($event: any) {
    this.streamOrdiCreated.notify(this.buildOrdi());
    this.formOrdi.reset();
  }

  private listenStreamOrdiCreated():void{
    const sub : Subscription = this.streamOrdiCreated.$ordiCreated.subscribe(users=>this.createdOrdi(users));
  }

  private buildOrdi():OrdiDTO {

      return {
        nom:this.formOrdi.get("nomOrdi").value,
        marque:this.formOrdi.get("marqueOrdi").value,
        prix:this.formOrdi.get("prixOrdi").value,
        nomProc:this.formOrdi.get("nomProcOrdi").value,
        nomCg:this.formOrdi.get("nomCgOrdi").value,
        capacite:this.formOrdi.get("capaciteOrdi").value,
        memoireV:this.formOrdi.get("memoireVOrdi").value,
        ssd:this.formOrdi.get("ssdOrdi").value,
        description:this.formOrdi.get("descriptionOrdi").value,
        qte:this.formOrdi.get("qteOrdi").value,
        capaciteSsd:this.formOrdi.get("capaciteSsdOrdi").value,
        img:this.formOrdi.get("imgOrdi").value,
        prixReduc:0.00,
      };
  }

  private createdOrdi(ordi:OrdiDTO){
    const sub = this.ordiService.post(ordi).subscribe(proc => console.log());
  }

}
