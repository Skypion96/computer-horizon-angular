import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {RoutingModule} from './routing/routing.module';
import { ProcesseurPipePipe } from './pipes/processeur-pipe.pipe';
import { CarteGPipe } from './pipes/carte-g.pipe';
import { OrdinateurPipe } from './pipes/ordinateur.pipe';
import { DisqueDPipe } from './pipes/disque-d.pipe';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { AdminComponent } from './admin/admin.component';
import { AjoutComponentComponent } from './Admin/Ajout/ajout-component/ajout-component.component';
import { CarteGComponent } from './admin/ajout/carte-g/carte-g.component';
import { DisqueDComponent } from './admin/ajout/disque-d/disque-d.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProcesseurPipePipe,
    CarteGPipe,
    OrdinateurPipe,
    DisqueDPipe,
    LoginComponent,
    AlertComponent,
    AjoutComponentComponent,
    CarteGComponent,
    DisqueDComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    RoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    ProcesseurPipePipe,
    AjoutComponentComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
