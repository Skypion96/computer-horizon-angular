import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProcList} from '../interfaces/proc-interface';
import {Subscription} from 'rxjs';
import {ProcServiceService} from '../services/proc-service.service';
import {DisqueDServiceService} from '../services/disque-dservice.service';
import {DisqueDInterface, DisqueDList} from '../interfaces/disque-dinterface';
import {DisqueDSsd} from '../enums/disque-d-ssd.enum';
import {DisqueDPipe} from '../pipes/disque-d.pipe';
import {DisqueDMarque} from '../enums/disque-d-marque.enum';
import {Prix} from '../enums/prix.enum';

@Component({
  selector: 'app-disque-dur',
  templateUrl: './disque-dur.component.html',
  styleUrls: ['./disque-dur.component.css']
})
export class DisqueDurComponent implements OnInit,OnDestroy {

  private disqueDList: DisqueDList=[];
  private subQuery:Subscription;
  private _disqueDPipe: DisqueDPipe = new DisqueDPipe();


  readonly TYPE_FILTER_SSD =[{
    id: 'Tout',
    value: DisqueDSsd.ALL
  },{
    id: 'SSD',
    value: DisqueDSsd.AVEC
  },{
    id: 'Non SSD',
    value: DisqueDSsd.SANS
  }];
  filterSelectedSSD: DisqueDSsd = DisqueDSsd.ALL;


  readonly TYPE_FILTER_MARQUE =[{
    id: 'Tout',
    value: DisqueDMarque.ALL
  },{
    id: 'Lacie',
    value: DisqueDMarque.LACIE
  },{
    id: 'Toshiba',
    value: DisqueDMarque.TOSHIBA
  },{
    id: 'Seagate',
    value: DisqueDMarque.SEAGATE
  }];
  filterSelectedMarque: DisqueDMarque = DisqueDMarque.ALL;

  readonly TYPE_FILTER_PRIX =[{
    id: 'Tout',
    value: Prix.ALL
  },{
    id: 'Inférieur à 400',
    value: Prix.INF400
  },{
    id: 'Entre 400 et 1000',
    value: Prix.INF1000
  },{
    id: 'Supérieur à 1000',
    value: Prix.SUP1000
  }];
  filterSelectedPrix: Prix = Prix.ALL;

  constructor(public disqueDService: DisqueDServiceService) { }

  ngOnInit() {
    this.loadProcList();
  }

  ngOnDestroy(): void {
    this.subQuery && this.subQuery.unsubscribe();
  }

  private loadProcList():void{
    this.subQuery =this.disqueDService
      .queryBase()
      .subscribe(disqueDs => this.disqueDList = disqueDs);
  }

  AffichageDisqueD(dd: DisqueDInterface, i: number) {
    document.getElementById(String(i)).innerHTML = null;
    var Eelement ="<table><tr><b class='nom'>" + dd.nom +"</b></tr><tr>"  +
      "<b class='description'>"+dd.marque+ "-" +dd.capacite+"</b><br>"+
      "</tr><br><br><tr> <b class='prixI' id=prix>"+dd.prix+ "€</b> </tr> </table>";
    document.getElementById(String(i)).innerHTML = Eelement;
  }

  get filteredDisqueD(): DisqueDList {
    return this._disqueDPipe.transform(this.disqueDList,this.filterSelectedSSD,this.filterSelectedMarque,this.filterSelectedPrix);
  }
}
