import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  readonly ROUTES_NAMES: string[] =["produits","processeurs","ordinateurs","carte-graphiques","disque-durs","Contact","Accueil"];

  constructor() { }

  ngOnInit() {
  }

}
