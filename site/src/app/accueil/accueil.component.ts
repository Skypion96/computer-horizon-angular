import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  graphic_card:any = "assets/pc-ordinateur-processeur";
  hard_drive:any = "assets/disque_durpdt.jpg";
  laptop:any = "assets/home-featured-cat-pc.png";
  processor:any = "assets/pc-ordinateur-processeur.jpg";
  newHorizon:any = "assets/id template.jpg";
  constructor() { }

  ngOnInit() {
  }

}
