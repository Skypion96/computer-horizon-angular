import {Component, OnDestroy, OnInit} from '@angular/core';
import {DisqueDInterface} from '../interfaces/disque-dinterface';
import {Subscription} from 'rxjs';
import {DisqueDServiceService} from '../services/disque-dservice.service';
import {CarteGInterface, CarteGList} from '../interfaces/carte-ginterface';
import {CarteGServiceService} from '../services/carte-gservice.service';

@Component({
  selector: 'app-carte-graphique',
  templateUrl: './carte-graphique.component.html',
  styleUrls: ['./carte-graphique.component.css']
})
export class CarteGraphiqueComponent implements OnInit,OnDestroy {

  private carteGList: CarteGList=[];
  private subQuery:Subscription;

  constructor(public carteGService: CarteGServiceService) { }

  ngOnInit() {
    this.loadProcList();
  }

  ngOnDestroy(): void {
    this.subQuery && this.subQuery.unsubscribe();
  }

  private loadProcList():void{
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
