import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AccueilComponent} from '../accueil/accueil.component';
import {ProcesseurComponent} from '../processeur/processeur.component';
import {ProductsComponent} from '../products/products.component';
import {ContactComponent} from '../contact/contact/contact.component';
import {OrdinateurComponent} from '../ordinateur/ordinateur.component';
import {DisqueDurComponent} from '../disque-dur/disque-dur.component';
import {CarteGraphiqueComponent} from '../carte-graphique/carte-graphique.component';
import {InscriptionComponent} from '../inscription/inscription.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppModule} from '../app.module';
import {ComponentAllComponent} from '../component-all/component-all.component';

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
  },
  {
    path:"Contact",
    component: ContactComponent
  },
  {
    path:"ordinateurs",
    component: OrdinateurComponent
  },
  {
    path:"disque-durs",
    component: DisqueDurComponent
  },
  {
    path:"carte-graphiques",
    component: CarteGraphiqueComponent
  },
  {
    path:"inscription",
    component: InscriptionComponent
  },
  {
    path:"Tout",
    component: ComponentAllComponent
  }
];

@NgModule({
  declarations: [AccueilComponent, ProcesseurComponent, ProductsComponent,ContactComponent,OrdinateurComponent,DisqueDurComponent,CarteGraphiqueComponent, InscriptionComponent,ComponentAllComponent],
  exports: [
    AccueilComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class RoutingModule { }
