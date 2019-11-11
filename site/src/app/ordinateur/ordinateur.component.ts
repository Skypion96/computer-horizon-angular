import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {OrdiServiceService} from '../services/ordi-service.service';
import {OrdiInterface, OrdiList} from '../interfaces/ordi-interface';

@Component({
  selector: 'app-ordinateur',
  templateUrl: './ordinateur.component.html',
  styleUrls: ['./ordinateur.component.css']
})
export class OrdinateurComponent implements OnInit,OnDestroy {

  private ordiList: OrdiInterface=[];
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
}
