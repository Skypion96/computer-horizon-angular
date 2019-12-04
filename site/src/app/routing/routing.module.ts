import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AccueilComponent} from '../accueil/accueil.component';
import {ProductsComponent} from '../products/products.component';
import {ContactComponent} from '../contact/contact/contact.component';
import {InscriptionComponent} from '../inscription/inscription.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ComponentAllComponent} from '../component-all/component-all.component';
import {AdminComponent} from '../admin/admin.component';
import {AjoutComponentComponent} from '../admin/Ajout/ajout-component/ajout-component.component';
import {PanierComponent} from '../panier/panier.component';

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
    path:"produits",
    component: ProductsComponent
  },
  {
    path:"Contact",
    component: ContactComponent
  },
  {
    path:"inscription",
    component: InscriptionComponent
  },
  {
    path:"Tout",
    component: ComponentAllComponent
  },
  {
    path:"Admin",
    component: AdminComponent
  },
  {
    path:"Ajout",
    component: AjoutComponentComponent
  },
  {
    path:"panierpanier",
    component: PanierComponent
  }
];

@NgModule({
  declarations: [AccueilComponent, ProductsComponent,ContactComponent, InscriptionComponent,ComponentAllComponent,AdminComponent,AjoutComponentComponent, PanierComponent],
  exports: [
    AccueilComponent,
    ComponentAllComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class RoutingModule { }
