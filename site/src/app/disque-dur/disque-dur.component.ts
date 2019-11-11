import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProcList} from '../interfaces/proc-interface';
import {Subscription} from 'rxjs';
import {ProcServiceService} from '../services/proc-service.service';
import {DisqueDServiceService} from '../services/disque-dservice.service';
import {DisqueDInterface, DisqueDList} from '../interfaces/disque-dinterface';

@Component({
  selector: 'app-disque-dur',
  templateUrl: './disque-dur.component.html',
  styleUrls: ['./disque-dur.component.css']
})
export class DisqueDurComponent implements OnInit,OnDestroy {

  private disqueDList: DisqueDList=[];
  private subQuery:Subscription;

  constructor(public disqueDService: DisqueDServiceService) { }

  ngOnInit() {
    this.loadProcList();
  }

  ngOnDestroy(): void {
    this.subQuery && this.subQuery.unsubscribe();
  }

  private loadProcList():void{
    this.subQuery =this.disqueDService
      .queryBase()
      .subscribe(disqueDs => this.disqueDList = disqueDs);
  }
}
