import { Component, OnInit } from '@angular/core';
import {ProcDTO, ProcList} from '../../interfaces/procDTO';
import {CarteGDTO, CarteGList} from '../../interfaces/carte-gDTO';
import {DisqueDDTO, DisqueDList} from '../../interfaces/disque-dDTO';
import {OrdiDTO, OrdiList} from '../../interfaces/ordiDTO';
import {Subscription} from 'rxjs';
import {ProcServiceService} from '../../services/proc-service.service';
import {DisqueDServiceService} from '../../services/disque-dservice.service';
import {OrdiServiceService} from '../../services/ordi-service.service';
import {CarteGServiceService} from '../../services/carte-gservice.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-modif',
  templateUrl: './modif.component.html',
  styleUrls: ['./modif.component.css']
})
export class ModifComponent implements OnInit {

  formCG: FormGroup = this.fbCG.group({
    nomCG : this.fbCG,
    marqueCG : this.fbCG,
    prixCG : this.fbCG,
    frequenceCG : this.fbCG,
    memoireVideoCG : this.fbCG,
    qteCG : this.fbCG,
    imgCG : this.fbCG,
    prixReducCG : this.fbCG,
  });

  formDD: FormGroup = this.fbDD.group({
    nomDD : this.fbDD.control('', Validators.required),
    marqueDD : this.fbDD.control('', Validators.required),
    capaciteDD : this.fbDD.control('', Validators.required),
    ssdDD : this.fbDD.control(''),
    prixDD : this.fbDD.control('', Validators.required),
    interneDD : this.fbDD.control(''),
    qteDD : this.fbDD.control('', Validators.required),
    imgDD : this.fbDD.control('', Validators.required),
    prixReducDD : this.fbDD.control('', Validators.required),
  });

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
    prixReducOrdi : this.fbOrdi.control('', Validators.required),
  });

  formP: FormGroup = this.fbP.group({
    nomP : this.fbP.control('', Validators.required),
    marqueP : this.fbP.control('', Validators.required),
    nbCoeursP : this.fbP.control('', Validators.required),
    frequenceP : this.fbP.control('', Validators.required),
    prixP : this.fbP.control('', Validators.required),
    qteP : this.fbP.control('', Validators.required),
    imgP : this.fbP.control('', Validators.required),
    reductionP : this.fbP.control('', Validators.required),
    coteP : this.fbP.control('', Validators.required),
    dateCoteP : this.fbP.control('', Validators.required),
    prixReducP : this.fbP.control('', Validators.required),
  });


  private _procList: ProcList;
  private carteGList: CarteGList=[];
  private disqueDList: DisqueDList=[];
  private ordiList: OrdiList=[];
  private subQuery:Subscription;
  private _iElement:number=0;
  readonly ADMIN:string ="Admin";


  constructor(public fbP: FormBuilder,public fbOrdi: FormBuilder,public fbDD: FormBuilder,public fbCG: FormBuilder,public procService: ProcServiceService,
              public disqueDService: DisqueDServiceService,public ordiService: OrdiServiceService,
              public carteGService: CarteGServiceService) { }

  ngOnInit() {
    this.loadProcList();
    this.loadDDList();
    this.loadOrdiList();
    this.loadCGList();
  }

  ngOnDestroy(): void {
    this.subQuery && this.subQuery.unsubscribe();
  }

  private loadOrdiList():void{
    this.subQuery =this.ordiService
      .queryBase()
      .subscribe(ordis => this.ordiList = ordis);
  }

  private loadCGList():void{
    this.subQuery =this.carteGService
      .queryBase()
      .subscribe(carteG => this.carteGList = carteG);
  }

  private loadDDList():void{
    this.subQuery =this.disqueDService
      .queryBase()
      .subscribe(disqueDs => this.disqueDList = disqueDs);
  }

  private loadProcList():void{
    this.subQuery =this.procService
      .queryBase()
      .subscribe(procs => this._procList = procs);
  }

  get iElement(): number {
    return this._iElement;
  }

  set iElement(value: number) {
    this._iElement = value;
  }


  updateCG(carte: CarteGDTO) {
    carte = this.buildCG();
    this.carteGService
      .update(carte)
      .subscribe(cg => this.loadCGList());
  }

  updateProc(proc: ProcDTO) {
    proc = this.buildUser();
    this.procService
      .update(proc)
      .subscribe(proc => this.loadProcList());
  }

  updateDD(dd: DisqueDDTO) {
    dd = this.buildDD();
    this.disqueDService
      .update(dd)
      .subscribe(dd=>this.loadDDList());
  }

  updateOrdi(ordi: OrdiDTO) {
    ordi = this.buildOrdi();
    this.ordiService
      .update(ordi)
      .subscribe(ordi=>this.loadOrdiList());
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
      prixReduc:this.formCG.get("prixReducCG").value,
    };
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
      prixReduc:this.formDD.get("prixReducDD").value,
    };
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
      prixReduc:this.formOrdi.get("prixReducOrdi").value,
    };
  }

  private buildUser():ProcDTO {
    return {
      nom:this.formP.get("nomP").value,
      marque:this.formP.get("marqueP").value,
      nbCoeurs:this.formP.get("nbCoeursP").value,
      frequence:this.formP.get("frequenceP").value,
      prix:this.formP.get("prixP").value,
      qte:this.formP.get("qteP").value,
      img:this.formP.get("imgP").value,
      reduction:this.formP.get("reductionP").value,
      cote:this.formP.get("coteP").value,
      dateCote:this.formP.get("dateCoteP").value,
      prixReduc:this.formP.get("prixReducP").value,
    };
  }
}
