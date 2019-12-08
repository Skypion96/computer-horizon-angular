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
import {UserDto} from '../interfaces/user-dto';
import {AuthenticationService} from '../services/authentification.service';

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
  private _user:UserDto;
  private _idPanier:number=0;

  constructor(public panierProc: PanierProcService, public panierCG: PanierCarteGraphiqueService, public panierDD: PanierDisqueDurService,
              public panierOrdi: PanierOrdinateurService,public procService:ProcServiceService,public carteGService:CarteGServiceService,
              public ordiService:OrdiServiceService,public disqueDService:DisqueDServiceService,public panierService:PanierService,
              public auth:AuthenticationService) { }

  ngOnInit() {
    this.loadPanierList()
    this.loadProcListProc();
    this.loadProcList();
    this.loadDisqueDList();
    this.loadCGList();
    this.loadOrdiList();
    this.loadCGListCG();
    this.loadOrdiListOrdi();
    this.loadDisqueDListDD();
    this.loadPanierList();
    this.chargerUtilisateur();
  }

  private loadPanierList():void{
    this.subQuery = this.panierService
      .queryBase()
      .subscribe(procs => this.panier = procs);
  }

  //Liste de processeur car le panier contient des processeurs
  //A VERIFIER
  private panierPList: PanierPList=[];




  private loadProcListProc():void{
    this.subQuery =this.procService
      .queryBase()
      .subscribe(procs => this.procList = procs);
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
    for(let pan of this.panier){
      if(pan.id == this.idPanier){
        for(let i of this.carteGList){
          for(let cg of this.panierCGList){
            if(i.nom==cg.nom){
              this.total += i.prix;
            }
          }
        }
        for(let j of this.procList){
          for(let p of this.panierPList){
            if(j.nom==p.nom){
              this.total += j.prix;
            }
          }
        }
        for(let k of this.disqueDList){
          for(let dd of this.panierDDList){
            if(k.nom==dd.nom){
              this.total += k.prix;
            }
          }
        }
        for(let l of this.ordiList){
          for(let o of this.panierOrdiList){
            if(l.nom==o.nom){
              this.total += l.prix;
            }
          }
        }
      }
    }
    this.total = Math.round(this.total*100)/100;
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


  get user(): UserDto {
    return this._user;
  }

  set user(value: UserDto) {
    this._user = value;
  }

  chargerUtilisateur():void{
    var hhh;
    hhh = this.auth.getMail();
    for(let p of this.panier){
      if(hhh== p.mail){
        this.idPanier = p.id;
      }
    }
  }


  get idPanier(): number {
    return this._idPanier;
  }

  set idPanier(value: number) {
    this._idPanier = value;
  }
}
