import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AccueilComponent} from '../accueil/accueil.component';
import {ProductsComponent} from '../products/products.component';
import {ContactComponent} from '../contact/contact/contact.component';
import {InscriptionComponent} from '../inscription/inscription.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppModule} from '../app.module';
import {ComponentAllComponent} from '../component-all/component-all.component';
import {AdminComponent} from '../admin/admin.component';
import {AjoutComponentComponent} from '../admin/Ajout/ajout-component/ajout-component.component';
import {ModifComponent} from '../admin/modif/modif.component';

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
    path:"Modif",
    component: ModifComponent
  }
];

@NgModule({
  declarations: [AccueilComponent, ProductsComponent,ContactComponent, InscriptionComponent,ComponentAllComponent,AdminComponent,AjoutComponentComponent,ModifComponent],
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
