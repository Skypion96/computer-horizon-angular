import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AccueilComponent} from '../accueil/accueil.component';
import {ProcesseurComponent} from '../processeur/processeur.component';
import {ProductsComponent} from '../products/products.component';

const routes:Routes =[
  {
    path: "Accueil",
    component: AccueilComponent
  },
  {
    path:'',
    redirectTo: "/Accueil",
    pathMatch: 'full'
  },
  {
    path:"processeurs",
    component: ProcesseurComponent
  },
  {
    path:"produits",
    component: ProductsComponent
  }
];

@NgModule({
  declarations: [AccueilComponent, ProcesseurComponent, ProductsComponent],
  exports: [
    AccueilComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule { }
