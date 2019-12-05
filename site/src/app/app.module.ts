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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AlertComponent } from './alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProcesseurPipePipe,
    CarteGPipe,
    OrdinateurPipe,
    DisqueDPipe,
    AlertComponent,
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
    ProcesseurPipePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
