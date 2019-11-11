import {Component, OnDestroy, OnInit} from '@angular/core';
import {DisqueDInterface} from '../interfaces/disque-dinterface';
import {Subscription} from 'rxjs';
import {DisqueDServiceService} from '../services/disque-dservice.service';
import {CarteGInterface} from '../interfaces/carte-ginterface';
import {CarteGServiceService} from '../services/carte-gservice.service';

@Component({
  selector: 'app-carte-graphique',
  templateUrl: './carte-graphique.component.html',
  styleUrls: ['./carte-graphique.component.css']
})
export class CarteGraphiqueComponent implements OnInit,OnDestroy {

  private carteGList: CarteGInterface=[];
  private subQuery:Subscription;

  constructor(public carteGService: CarteGServiceService) { }

  ngOnInit() {
    this.loadProcList();
  }

  ngOnDestroy(): void {
    this.subQuery && this.subQuery.unsubscribe();
  }

  private loadProcList():void{
    this.subQuery =this.carteGService
      .queryBase()
      .subscribe(disqueDs => this.carteGList = disqueDs);
  }

}
