import { Component, OnInit } from '@angular/core';
import {ProcInterface, ProcList} from '../interfaces/proc-interface';
import {Subscription} from 'rxjs';
import {ProcesseurPipePipe} from '../pipes/processeur-pipe.pipe';
import {Prix} from '../enums/prix.enum';
import {ProcMarque} from '../enums/proc-marque.enum';
import {ProcServiceService} from '../services/proc-service.service';
import {DisqueDInterface, DisqueDList} from '../interfaces/disque-dinterface';
import {DisqueDPipe} from '../pipes/disque-d.pipe';
import {DisqueDSsd} from '../enums/disque-d-ssd.enum';
import {DisqueDMarque} from '../enums/disque-d-marque.enum';
import {DisqueDServiceService} from '../services/disque-dservice.service';
import {OrdiInterface, OrdiList} from '../interfaces/ordi-interface';
import {OrdiServiceService} from '../services/ordi-service.service';
import {CarteGInterface, CarteGList} from '../interfaces/carte-ginterface';
import {CarteGServiceService} from '../services/carte-gservice.service';

@Component({
  selector: 'app-component-all',
  templateUrl: './component-all.component.html',
  styleUrls: ['./component-all.component.css']
})
export class ComponentAllComponent implements OnInit {

  private _procList: ProcList;
  private subQuery:Subscription;
  private nameSearched: string;
  private _processeurPipe: ProcesseurPipePipe = new ProcesseurPipePipe();

  readonly TYPE_FILTER_PRIX_PROC =[{
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
  filterSelectedProcPrix: Prix = Prix.ALL;

  readonly TYPE_FILTER_MARQUE_PROC =[{
    id: 'Tout',
    value: ProcMarque.ALL
  },{
    id: 'Intel',
    value: ProcMarque.Intel
  },{
    id: 'AMD',
    value: ProcMarque.AMD
  }];
  filterSelectedMarqueProc: ProcMarque = ProcMarque.ALL;



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

  private loadProcList():void{
    this.subQuery =this.procService
      .queryBase()
      .subscribe(procs => this._procList = procs);
  }


  private AffichageProc(proc: ProcInterface,i : number) {
    document.getElementById(String(i)).innerHTML = null;
    var Eelement ="<table><tr><b class='nom'>" + proc.nom +"</b></tr><tr>"  +
      "<b class='description'>"+proc.marque+ "-" +proc.frequence+"</b><br>"+
      "</tr><br><br><tr> <b class='prixI' id=prix>"+proc.prix+ "€</b> </tr> </table>";
    document.getElementById(String(i)).innerHTML = Eelement;
  }


  get procList(): ProcList {
    return this._procList;
  }


  get filteredProcList(): ProcList {
    return this._processeurPipe.transform(this.procList,this.nameSearched,this.filterSelectedProcPrix,this.filterSelectedMarqueProc);
  }
//********************************************************************************************************************************
//DISQUE DUR

  private disqueDList: DisqueDList=[];
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


  readonly TYPE_FILTER_MARQUE_DISQUED =[{
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
  filterSelectedMarqueDD: DisqueDMarque = DisqueDMarque.ALL;

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


  private loadDDList():void{
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
    return this._disqueDPipe.transform(this.disqueDList,this.filterSelectedSSD,this.filterSelectedMarqueDD,this.filterSelectedPrix);
  }

//********************************************************************************************************************************
//ORDINATEURS
  private ordiList: OrdiList=[];






  private loadOrdiList():void{
    this.subQuery =this.ordiService
      .queryBase()
      .subscribe(ordis => this.ordiList = ordis);
  }

  AffichageOrdi(ordi: OrdiInterface, i: number) {
    document.getElementById(String(i)).innerHTML = null;
    var Eelement ="<table><tr><b class='nom'>" + ordi.nom +"</b></tr><tr>"  +
      "<b class='description'>"+ordi.marque+ "-" +ordi.nomProc+ "-" +ordi.memoireV+ "-" +ordi.capacite+"</b><br>"+
      "</tr><br><br><tr> <b class='prixI' id=prix>"+ordi.prix+ "€</b> </tr> </table>";
    document.getElementById(String(i)).innerHTML = Eelement;

  }

//********************************************************************************************************************************
//CARTE GRAPHIQUE
  private carteGList: CarteGList=[];



  private loadCGList():void{
    this.subQuery =this.carteGService
      .queryBase()
      .subscribe(disqueDs => this.carteGList = disqueDs);
  }

  AffichageCarteG(cg: CarteGInterface, i: number) {
    document.getElementById(String(i)).innerHTML = null;
    var Eelement ="<table><tr><b class='nom'>" + cg.nom +"</b></tr><tr>"  +
      "<b class='description'>"+cg.marque+ "-" +cg.frequence+"</b><br>"+
      "</tr><br><br><tr> <b class='prixI' id=prix>"+cg.prix+ "€</b> </tr> </table>";
    document.getElementById(String(i)).innerHTML = Eelement;
  }
}
