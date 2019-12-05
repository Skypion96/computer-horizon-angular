import { Component, OnInit } from '@angular/core';
import {ProcList} from '../../interfaces/procDTO';
import {CarteGDTO, CarteGList} from '../../interfaces/carte-gDTO';
import {DisqueDList} from '../../interfaces/disque-dDTO';
import {OrdiList} from '../../interfaces/ordiDTO';
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
    nomCG : this.fbCG.control('', Validators.required),
    marqueCG : this.fbCG.control('', Validators.required),
    prixCG : this.fbCG.control('', Validators.required),
    frequenceCG : this.fbCG.control('', Validators.required),
    memoireVideoCG : this.fbCG.control('', Validators.required),
    qteCG : this.fbCG.control('', Validators.required),
    imgCG : this.fbCG.control('', Validators.required),
    prixReducCG : this.fbCG.control('', Validators.required),
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


  updateCG($event: CarteGDTO) {
    this.carteGService
      .update($event)
      .subscribe();

  }
}
