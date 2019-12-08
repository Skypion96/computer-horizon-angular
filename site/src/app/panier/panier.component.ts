import { Component, OnInit } from '@angular/core';
import {PanierProcService} from '../services/panier-proc.service';
import {PanierCarteGraphiqueService} from '../services/panier-carte-graphique.service';
import {PanierDisqueDurService} from '../services/panier-disque-dur.service';
import {PanierOrdinateurService} from '../services/panier-ordinateur.service';
import {Subscription} from 'rxjs';
import {DisqueDDTO, DisqueDList} from '../interfaces/disque-dDTO';
import {PanierPList, PanierProcDTO} from '../interfaces/panier-proc-dto';
import {ProcDTO, ProcList} from '../interfaces/procDTO';
import {CarteGDTO, CarteGList} from '../interfaces/carte-gDTO';
import {OrdiDTO, OrdiList} from '../interfaces/ordiDTO';
import {ProcServiceService} from '../services/proc-service.service';
import {CarteGServiceService} from '../services/carte-gservice.service';
import {PanierCarteGraphiqueDto, PanierCGList} from '../interfaces/panier-carte-graphique-dto';
import {PanierOList, PanierOrdinateurDto} from '../interfaces/panier-ordinateur-dto';
import {PanierDDList, PanierDisqueDurDto} from '../interfaces/panier-disque-dur-dto';
import {OrdiServiceService} from '../services/ordi-service.service';
import {DisqueDServiceService} from '../services/disque-dservice.service';
import {PanierDTO, PanierList} from '../interfaces/panier-dto';
import {PanierService} from '../services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  private subQuery:Subscription;
  private _total:number=0;
  private carteGList: CarteGList=[];
  private procList: ProcList=[];
  private disqueDList: DisqueDList=[];
  private ordiList: OrdiList=[];
  private _panierCalcTot:number=0;
  private panier:PanierList=[];

  constructor(public panierProc: PanierProcService, public panierCG: PanierCarteGraphiqueService, public panierDD: PanierDisqueDurService,
              public panierOrdi: PanierOrdinateurService,public procService:ProcServiceService,public carteGService:CarteGServiceService,
              public ordiService:OrdiServiceService,public disqueDService:DisqueDServiceService,public panierService:PanierService) { }

  ngOnInit() {
    this.loadProcListProc();
    this.loadProcList();
    this.loadDisqueDList();
    this.loadCGList();
    this.loadOrdiList();
    this.loadCGListCG();
    this.loadOrdiListOrdi();
    this.loadDisqueDListDD();
    this.loadPanierList();
  }

  private loadPanierList():void{
    this.subQuery = this.panierService
      .queryBase()
      .subscribe();
  }

  //Liste de processeur car le panier contient des processeurs
  //A VERIFIER
  private panierPList: PanierPList=[];
  private _procList: ProcList;




  private loadProcListProc():void{
    this.subQuery =this.procService
      .queryBase()
      .subscribe(procs => this._procList = procs);
  }
  private loadProcList():void{
    this.subQuery =this.panierProc
      .queryBase()
      .subscribe(panierP => this.panierPList = panierP);
  }

  private panierDDList: PanierDDList=[];
  private _ddList: DisqueDList;

  private loadDisqueDList():void{
    this.subQuery =this.panierDD
      .queryBase()
      .subscribe(panierDD => this.panierDDList = panierDD);
  }
  private loadDisqueDListDD():void{
    this.subQuery =this.disqueDService
      .queryBase()
      .subscribe(disqueD => this.disqueDList = disqueD);
  }

  private panierCGList: PanierCGList=[];
  private _cgList: CarteGList;

  private loadCGListCG():void{
    this.subQuery =this.carteGService
      .queryBase()
      .subscribe(carteG => this.carteGList = carteG);
  }
  private loadCGList():void{
    this.subQuery =this.panierCG
      .queryBase()
      .subscribe(panierCG => this.panierCGList = panierCG);
  }

  private panierOrdiList: PanierOList=[];
  private _oList: OrdiList;

  private loadOrdiList():void{
    this.subQuery =this.panierOrdi
      .queryBase()
      .subscribe(panierO => this.panierOrdiList = panierO);
  }
  private loadOrdiListOrdi():void{
    this.subQuery =this.ordiService
      .queryBase()
      .subscribe(ordi => this.ordiList = ordi);
  }

  get total(): number {
    return this._total;
  }

  set total(value: number) {
    this._total = value;
  }

  private totalCalculate(value:number):void{

    for(let i of this.carteGList){
      for(let cg of this.panierCGList){
        if(i.nom==cg.nom){
          this.total += i.prix;
        }
      }
    }
    for(let i of this.procList){
      for(let p of this.panierPList){
        if(i.nom==p.nom){
          this.total += i.prix;
        }
      }
    }
    for(let i of this.disqueDList){
      for(let dd of this.panierDDList){
        if(i.nom==dd.nom){
          this.total += i.prix;
        }
      }
    }
    for(let i of this.ordiList){
      for(let o of this.panierOrdiList){
        if(i.nom==o.nom){
          this.total += i.prix;
        }
      }
    }
    this.panierCalcTot=value;
  }


  get panierCalcTot(): number {
    return this._panierCalcTot;
  }

  set panierCalcTot(value: number) {
    this._panierCalcTot = value;
  }

  deleteAndSaveProcList(proc:PanierProcDTO) {
    this.panierProc
      .delete(proc.nom)
      .subscribe(() => this.loadProcList());
  }
  deleteAndSaveOrdiList(ordi:PanierOrdinateurDto) {
    this.panierOrdi
      .delete(ordi.nom)
      .subscribe(() => this.loadOrdiList());
  }
  deleteAndSaveCGList(carteG:PanierCarteGraphiqueDto) {
    this.panierCG
      .delete(carteG.nom)
      .subscribe(() => this.loadCGList());
  }
  deleteAndSaveDDList(dd:PanierDisqueDurDto) {
    this.panierDD
      .delete(dd.nom)
      .subscribe(() => this.loadDisqueDList());
  }

}
