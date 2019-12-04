import { Component, OnInit } from '@angular/core';
import {PanierProcService} from '../services/panier-proc.service';
import {PanierCarteGraphiqueService} from '../services/panier-carte-graphique.service';
import {PanierDisqueDurService} from '../services/panier-disque-dur.service';
import {PanierOrdinateurService} from '../services/panier-ordinateur.service';
import {Subscription} from 'rxjs';
import {DisqueDList} from '../interfaces/disque-dDTO';
import {PanierPList} from '../interfaces/panier-proc-dto';
import {ProcList} from '../interfaces/procDTO';
import {CarteGList} from '../interfaces/carte-gDTO';
import {OrdiList} from '../interfaces/ordiDTO';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  private subQuery:Subscription;
  private total:number;

  constructor(public panierProc: PanierProcService, public panierCG: PanierCarteGraphiqueService, public panierDD: PanierDisqueDurService,
              public panierOrdi: PanierOrdinateurService) { }

  ngOnInit() {
    this.loadProcList();
    this.loadDisqueDList();
    this.loadCGList();
    this.loadOrdiList();
  }

  //Liste de processeur car le panier contient des processeurs
  //A VERIFIER
  private panierPList: ProcList=[];

  private loadProcList():void{
    this.subQuery =this.panierProc
      .queryBase()
      .subscribe(panierP => this.panierPList = panierP);
  }

  private panierDDList: DisqueDList=[];

  private loadDisqueDList():void{
    this.subQuery =this.panierDD
      .queryBase()
      .subscribe(panierDD => this.panierDDList = panierDD);
  }

  private panierCGList: CarteGList=[];

  private loadCGList():void{
    this.subQuery =this.panierCG
      .queryBase()
      .subscribe(panierCG => this.panierCGList = panierCG);
  }

  private panierOrdiList: OrdiList=[];

  private loadOrdiList():void{
    this.subQuery =this.panierOrdi
      .queryBase()
      .subscribe(panierO => this.panierOrdiList = panierO);
  }

  private totalCalculate():void{
    for(let proc of this.panierPList){
      this.total = this.total + proc.prix;
    }
    for(let dd of this.panierDDList){
      this.total = this.total + dd.prix;
    }
    for(let cg of this.panierCGList){
      this.total = this.total + cg.prix;
    }
    for(let ordi of this.panierOrdiList){
      this.total = this.total + ordi.prix;
    }
  }

}
