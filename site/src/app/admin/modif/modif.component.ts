import { Component, OnInit } from '@angular/core';
import {ProcList} from '../../interfaces/procDTO';
import {CarteGList} from '../../interfaces/carte-gDTO';
import {DisqueDList} from '../../interfaces/disque-dDTO';
import {OrdiList} from '../../interfaces/ordiDTO';
import {Subscription} from 'rxjs';
import {ProcServiceService} from '../../services/proc-service.service';
import {DisqueDServiceService} from '../../services/disque-dservice.service';
import {OrdiServiceService} from '../../services/ordi-service.service';
import {CarteGServiceService} from '../../services/carte-gservice.service';

@Component({
  selector: 'app-modif',
  templateUrl: './modif.component.html',
  styleUrls: ['./modif.component.css']
})
export class ModifComponent implements OnInit {

  private _procList: ProcList;
  private carteGList: CarteGList=[];
  private disqueDList: DisqueDList=[];
  private ordiList: OrdiList=[];
  private subQuery:Subscription;
  private _iElement:number=0;
  readonly ADMIN:string ="Admin";


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
}
