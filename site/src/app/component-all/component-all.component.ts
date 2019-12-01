import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ProcDTO, ProcList} from '../interfaces/procDTO';
import {Subscription} from 'rxjs';
import {ProcesseurPipePipe} from '../pipes/processeur-pipe.pipe';
import {Prix} from '../enums/prix.enum';
import {ProcMarque} from '../enums/proc-marque.enum';
import {ProcServiceService} from '../services/proc-service.service';
import {DisqueDDTO, DisqueDList} from '../interfaces/disque-dDTO';
import {DisqueDPipe} from '../pipes/disque-d.pipe';
import {DisqueDSsd} from '../enums/disque-d-ssd.enum';
import {DisqueDMarque} from '../enums/disque-d-marque.enum';
import {DisqueDServiceService} from '../services/disque-dservice.service';
import {OrdiDTO, OrdiList} from '../interfaces/ordiDTO';
import {OrdiServiceService} from '../services/ordi-service.service';
import {CarteGDTO, CarteGList} from '../interfaces/carte-gDTO';
import {CarteGServiceService} from '../services/carte-gservice.service';
import {OrdinateurPipe} from '../pipes/ordinateur.pipe';
import {OrdiMarque} from '../enums/ordi-marque.enum';
import {CarteGPipe} from '../pipes/carte-g.pipe';
import {PanierProcService} from '../services/panier-proc.service';
import {PanierProcDTO} from '../interfaces/panier-proc-dto';
import {PanierDisqueDurDto} from '../interfaces/panier-disque-dur-dto';
import {PanierCarteGraphiqueDto} from '../interfaces/panier-carte-graphique-dto';
import {PanierOrdinateurDto} from '../interfaces/panier-ordinateur-dto';
import {PanierCarteGraphiqueService} from '../services/panier-carte-graphique.service';
import {PanierDisqueDurService} from '../services/panier-disque-dur.service';
import {PanierOrdinateurService} from '../services/panier-ordinateur.service';

@Component({
  selector: 'app-component-all',
  templateUrl: './component-all.component.html',
  styleUrls: ['./component-all.component.css']
})
export class ComponentAllComponent implements OnInit,OnDestroy {

  private _procList: ProcList;
  private subQuery:Subscription;
  private nameSearched: string;
  private _processeurPipe: ProcesseurPipePipe = new ProcesseurPipePipe();
  private _iProc:number;



  //AJOUT DANS PANIER
  private _panierp:PanierProcDTO=new class implements PanierProcDTO {
    id: 2;
    nom: "test";
  };
  get panierp(): PanierProcDTO {
    return this._panierp;
  }
  set panierp(value: PanierProcDTO) {
    this._panierp = value;
  }



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

  @Output()
  procCharged:EventEmitter<ProcDTO> = new EventEmitter<ProcDTO>();

  constructor(public procService: ProcServiceService,public disqueDService: DisqueDServiceService,public ordiService: OrdiServiceService,
  public carteGService: CarteGServiceService,public panierpService:PanierProcService,public panieCGService:PanierCarteGraphiqueService,
              public panierDDService:PanierDisqueDurService,public panierOrdinateurService:PanierOrdinateurService ) { }

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

  get procList(): ProcList {
    return this._procList;
  }


  get filteredProcList(): ProcList {
    return this._processeurPipe.transform(this.procList,this.nameSearched,this.filterSelectedPrix,this.filterSelectedMarqueProc);
  }

  get iProc(): number {
    return this._iProc;
  }

  set iProc(value: number) {
    this._iProc = value;
  }

  changeProc(num:number) {
    this.iProc = num;
  }
  changeretroProc(num:number) {
    this.iProc =-1;
  }

  //AJOUT DANS PANIER
  private createdProc(nom:string){
    this.panierp.nom=nom;
    this.panierp.id = 1;

    const sub = this.panierpService
      .post(this.panierp)
      .subscribe(thePP => console.log(thePP));
  }

//********************************************************************************************************************************
//DISQUE DUR

  private disqueDList: DisqueDList=[];
  private _disqueDPipe: DisqueDPipe = new DisqueDPipe();
  private _iDD:number;
  //AJOUT DANS PANIER
  private _panierdd:PanierDisqueDurDto=new class implements PanierDisqueDurDto {
    id: 2;
    nom: "test";
  };
  get panierdd(): PanierDisqueDurDto {
    return this._panierdd;
  }
  set panierdd(value: PanierDisqueDurDto) {
    this._panierdd = value;
  }

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

  get filteredDisqueD(): DisqueDList {
    return this._disqueDPipe.transform(this.disqueDList,this.filterSelectedSSD,this.filterSelectedMarqueDD,this.filterSelectedPrix);
  }

  get iDD(): number {
    return this._iDD;
  }

  set iDD(value: number) {
    this._iDD = value;
  }

  changeDD(num:number) {
    this.iDD = num;
  }
  changeretroDD(num:number) {
    this.iDD =-1;
  }

  //AJOUT DANS PANIER
  private createdDD(nom:string){
    this.panierdd.nom=nom;
    this.panierdd.id = 1;

    const sub = this.panierDDService
      .post(this.panierdd)
      .subscribe(thePP => console.log(thePP));
  }

//********************************************************************************************************************************
//ORDINATEURS
  private ordiList: OrdiList=[];
  private _ordiPipe: OrdinateurPipe = new OrdinateurPipe();
  private _iOrdi:number =-1;
  //AJOUT DANS PANIER
  private _paniero:PanierOrdinateurDto=new class implements PanierOrdinateurDto {
    id: 2;
    nom: "test";
  };
  get paniero(): PanierOrdinateurDto {
    return this._paniero;
  }
  set paniero(value: PanierOrdinateurDto) {
    this._paniero = value;
  }


  readonly TYPE_FILTER_MARQUE_ORDI =[{
    id: 'Tout',
    value: OrdiMarque.ALL
  },{
    id: 'ACER',
    value: OrdiMarque.ACER
  },{
    id: 'ASUS',
    value: OrdiMarque.ASUS
  },{
    id: 'HP',
    value: OrdiMarque.HP
  },{
    id: 'MSI',
    value: OrdiMarque.MSI
  }];
  filterSelectedMarqueOrdi: OrdiMarque = OrdiMarque.ALL;


  get iOrdi(): number {
    return this._iOrdi;
  }

  set iOrdi(value: number) {
    this._iOrdi = value;
  }

  changeIOrdi(num:number) {
    this.iOrdi = num;
  }
  changeretroIOrdi(num:number) {
    this.iOrdi =-1;
  }

  private loadOrdiList():void{
    this.subQuery =this.ordiService
      .queryBase()
      .subscribe(ordis => this.ordiList = ordis);
  }

  get filteredOrdinateur(): OrdiList {
    return this._ordiPipe.transform(this.ordiList,this.filterSelectedPrix,this.filterSelectedMarqueOrdi);
  }

  //AJOUT DANS PANIER
  private createdOrdi(nom:string){
    this.paniero.nom=nom;
    this.paniero.id = 1;

    const sub = this.panierOrdinateurService
      .post(this.paniero)
      .subscribe(thePP => console.log(thePP));
  }
//********************************************************************************************************************************
//CARTE GRAPHIQUE
  private carteGList: CarteGList=[];
  private _carteGPipe: CarteGPipe = new CarteGPipe();
  private _icg:number =-1;
  //AJOUT DANS PANIER
  private _paniercg:PanierCarteGraphiqueDto=new class implements PanierCarteGraphiqueDto {
    id: 2;
    nom: "test";
  };
  get paniercg(): PanierCarteGraphiqueDto {
    return this._paniercg;
  }
  set paniercg(value: PanierCarteGraphiqueDto) {
    this._paniercg = value;
  }

  private loadCGList():void{
    this.subQuery =this.carteGService
      .queryBase()
      .subscribe(carteG => this.carteGList = carteG);
  }

  get filteredCarteG(): CarteGList {
    return this._carteGPipe.transform(this.carteGList,this.filterSelectedPrix,this.nameSearched);
  }


  get icg(): number {
    return this._icg;
  }

  set icg(value: number) {
    this._icg = value;
  }

  changeICG(num:number) {
    this.icg = num;
  }
  changeretroICG(num:number) {
    this.icg =-1;
  }

  //AJOUT DANS PANIER
  private createdCG(nom:string){
    this.paniercg.nom=nom;
    this.paniercg.id = 1;

    const sub = this.panieCGService
      .post(this.paniercg)
      .subscribe(thePP => console.log(thePP));
  }
}
