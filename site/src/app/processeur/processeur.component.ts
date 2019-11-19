import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProcServiceService} from "../services/proc-service.service";
import {ProcInterface, ProcList} from '../interfaces/proc-interface';
import {Subscription} from "rxjs";
import {reduce} from 'rxjs/operators';

@Component({
  selector: 'app-processeur',
  templateUrl: './processeur.component.html',
  styleUrls: ['./processeur.component.css']
})
export class ProcesseurComponent implements OnInit,OnDestroy {

  private procList: ProcList=[];
  private subQuery:Subscription;

  constructor(public procService: ProcServiceService) { }

  ngOnInit() {
    this.loadProcList();
  }

  ngOnDestroy(): void {
    this.subQuery && this.subQuery.unsubscribe();
  }

  private loadProcList():void{
    this.subQuery =this.procService
      .queryBase()
      .subscribe(procs => this.procList = procs);
  }


  private AffichageProc(proc: ProcInterface,i : number) {
    document.getElementById(String(i)).innerHTML = null;
    var Eelement ="<table><tr><b class='nom'>" + proc.nom +"</b></tr><tr>"  +
    "<b class='description'>"+proc.marque+ "-" +proc.frequence+"</b><br>"+
    "</tr><br><br><tr> <b class='prixI' id=prix>"+proc.prix+ "€</b> </tr> </table>";
    document.getElementById(String(i)).innerHTML = Eelement;
  }
}
