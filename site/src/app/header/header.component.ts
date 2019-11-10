import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logoPath:any = "assets/logo.png";
  readonly PRODUCT: string = "produits";
  readonly ACCUEIL:string ="Accueil";

  constructor() { }

  ngOnInit() {
  }

}
