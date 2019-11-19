import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {OrdiServiceService} from '../services/ordi-service.service';
import {OrdiInterface, OrdiList} from '../interfaces/ordi-interface';
import {ProcInterface} from '../interfaces/proc-interface';

@Component({
  selector: 'app-ordinateur',
  templateUrl: './ordinateur.component.html',
  styleUrls: ['./ordinateur.component.css']
})
export class OrdinateurComponent implements OnInit,OnDestroy {

  private ordiList: OrdiList=[];
  private subQuery:Subscription;

  constructor(public ordiService: OrdiServiceService) { }

  ngOnInit() {
    this.loadProcList();
  }

  ngOnDestroy(): void {
    this.subQuery && this.subQuery.unsubscribe();
  }

  private loadProcList():void{
    this.subQuery =this.ordiService
      .queryBase()
      .subscribe(ordis => this.ordiList = ordis);
  }

  AffichageOrdi(ordi: OrdiInterface, i: number) {
      document.getElementById(String(i)).innerHTML = null;
      var Eelement ="<table><tr><b class='nom'>" + ordi.nom +"</b></tr><tr>"  +
        "<b class='description'>"+ordi.marque+ "-" +ordi.nomProc+ "-" +ordi.memoireV+ "-" +ordi.capacite+"</b><br>"+
        "</tr><br><br><tr> <b class='prixI' id=prix>"+ordi.prix+ "€</b> </tr> </table>";
      document.getElementById(String(i)).innerHTML = Eelement;

  }
}
