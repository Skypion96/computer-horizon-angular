import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {RoutingModule} from './routing/routing.module';
import {TokenInterceptorService} from './services/token-interceptor.service';
import { ProcesseurPipePipe } from './pipes/processeur-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProcesseurPipePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    RoutingModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass : TokenInterceptorService,
    multi : true
  }],
  exports: [
    HeaderComponent,
    ProcesseurPipePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
