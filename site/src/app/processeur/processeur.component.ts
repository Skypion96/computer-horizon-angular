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

  private checkReduc(proc: ProcInterface) {
    console.log(this.procList);
    if(proc.reduction != 0){
      document.getElementById("prix").classList.add("prixIReduc");
      document.getElementById("reduction").innerHTML = "(" + proc.reduction + "%)";
      document.getElementById("prixReduc").innerHTML = proc.prixReduc + " €";
    }
  }
}
