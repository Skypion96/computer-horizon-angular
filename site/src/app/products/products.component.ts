import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  graphic_card:any = "assets/carte_graphiquepdt.jpg";
  hard_drive:any = "assets/disque_durpdt.jpg";
  laptop:any = "assets/ordinateurpdt.jpg";
  processor:any = "assets/processeurpdt.jpg";
  readonly PROCESSEUR: string = "processeurs";
  readonly ORDINATEUR: string = "ordinateurs";
  readonly CARTEG: string = "carte-graphiques";
  readonly DISQUED: string = "Tout";

  constructor() { }

  ngOnInit() {
  }

}
