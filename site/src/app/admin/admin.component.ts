import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProcDTO, ProcList} from '../interfaces/procDTO';
import {CarteGDTO, CarteGList} from '../interfaces/carte-gDTO';
import {DisqueDDTO, DisqueDList} from '../interfaces/disque-dDTO';
import {OrdiDTO, OrdiList} from '../interfaces/ordiDTO';
import {ProcServiceService} from '../services/proc-service.service';
import {DisqueDServiceService} from '../services/disque-dservice.service';
import {OrdiServiceService} from '../services/ordi-service.service';
import {CarteGServiceService} from '../services/carte-gservice.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit,OnDestroy {

  private _procList: ProcList;
  private carteGList: CarteGList=[];
  private disqueDList: DisqueDList=[];
  private ordiList: OrdiList=[];
  private subQuery:Subscription;
  private _iElement:number=0;



  constructor(public procService: ProcServiceService,public disqueDService: DisqueDServiceService,public ordiService: OrdiServiceService,
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

  deleteAndSaveProcList(proc:ProcDTO) {
    this.procService
      .delete(proc.nom)
      .subscribe(() => this.loadProcList());
  }
  deleteAndSaveOrdiList(ordi:OrdiDTO) {
    this.ordiService
      .delete(ordi.nom)
      .subscribe(() => this.loadOrdiList());
  }
  deleteAndSaveCGList(carteG:CarteGDTO) {
    this.carteGService
      .delete(carteG.nom)
      .subscribe(() => this.loadCGList());
  }
  deleteAndSaveDDList(dd:DisqueDDTO) {
    this.disqueDService
      .delete(dd.nom)
      .subscribe(() => this.loadDDList());
  }
}
