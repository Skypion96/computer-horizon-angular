import { Component, OnInit } from '@angular/core';
import {ProcServiceService} from "../services/proc-service.service";
import {ProcList} from "../interfaces/proc-interface";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-processeur',
  templateUrl: './processeur.component.html',
  styleUrls: ['./processeur.component.css']
})
export class ProcesseurComponent implements OnInit {

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
      .query()
      .subscribe(procs => this.procList = procs);
  }

}
