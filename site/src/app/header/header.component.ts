import { Component, OnInit } from '@angular/core';
import {UserDto} from '../interfaces/user-dto';
import {AuthenticationService} from '../services/authentification.service';
import {AuthGuard} from '../routing/AuthGuard';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logoPath:any = "assets/logo.png";
  readonly PRODUCT: string = "produits";
  readonly ACCUEIL:string ="Accueil";
  readonly CONTACT:string ="Contact";
  readonly INSCRIPTION:string="inscription";
  readonly LOGIN:string ="login";
  readonly PANIER:string="panierpanier";

  constructor() { }

  ngOnInit() {
  }

}
