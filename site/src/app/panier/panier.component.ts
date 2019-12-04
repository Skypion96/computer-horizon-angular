import { Component, OnInit } from '@angular/core';
import {PanierProcService} from '../services/panier-proc.service';
import {PanierCarteGraphiqueService} from '../services/panier-carte-graphique.service';
import {PanierDisqueDurService} from '../services/panier-disque-dur.service';
import {PanierOrdinateurService} from '../services/panier-ordinateur.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  private subQuery:Subscription;

  constructor(public panierProc: PanierProcService, public panierCG: PanierCarteGraphiqueService, public panierDD: PanierDisqueDurService,
              public panierOrdi: PanierOrdinateurService) { }

  ngOnInit() {
  }

  /*private loadProcList():void{
    this.subQuery =this.panierProc
      .queryBase()
      .subscribe(panierP => this.);
  }*/

  /*private loadDDList():void{
    this.subQuery =this.disqueDService
      .queryBase()
      .subscribe(disqueDs => this.disqueDList = disqueDs);
  }*/

}
