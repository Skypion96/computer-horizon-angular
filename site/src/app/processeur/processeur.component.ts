import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProcServiceService} from "../services/proc-service.service";
import {ProcInterface, ProcList} from '../interfaces/proc-interface';
import {Subscription} from "rxjs";
import {reduce} from 'rxjs/operators';
import {ProcesseurPipePipe} from '../pipes/processeur-pipe.pipe';
import {ProcMarque} from '../enums/proc-marque.enum';
import {Prix} from '../enums/prix.enum';

@Component({
  selector: 'app-processeur',
  templateUrl: './processeur.component.html',
  styleUrls: ['./processeur.component.css']
})
export class ProcesseurComponent implements OnInit,OnDestroy {

  private _procList: ProcList;
  private subQuery:Subscription;
  private nameSearched: string;
  private _processeurPipe: ProcesseurPipePipe = new ProcesseurPipePipe();
  private _name:string = "";


  readonly TYPE_FILTER =[{
    id: 'Tout',
    value: Prix.ALL
  },{
    id: 'Inférieur à 400',
    value: Prix.INF400
  },{
    id: 'Entre 400 et 1000',
    value: Prix.INF1000
  },{
    id: 'Supérieur à 1000',
    value: Prix.SUP1000
  }];
  filterSelected: Prix = Prix.ALL;

  readonly TYPE_FILTER_MARQUE =[{
    id: 'Tout',
    value: ProcMarque.ALL
  },{
    id: 'Intel',
    value: ProcMarque.Intel
  },{
    id: 'AMD',
    value: ProcMarque.AMD
  }];
  filterSelectedMarque: ProcMarque = ProcMarque.ALL;



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
      .subscribe(procs => this._procList = procs);
  }


  private AffichageProc(proc: ProcInterface,i : number) {
    document.getElementById(String(i)).innerHTML = null;
    var Eelement ="<table><tr><b class='nom'>" + proc.nom +"</b></tr><tr>"  +
    "<b class='description'>"+proc.marque+ "-" +proc.frequence+"</b><br>"+
    "</tr><br><br><tr> <b class='prixI' id=prix>"+proc.prix+ "€</b> </tr> </table>";
    document.getElementById(String(i)).innerHTML = Eelement;
  }


  get procList(): ProcList {
    return this._procList;
  }


  get filteredProcList(): ProcList {
    return this._processeurPipe.transform(this.procList,this.nameSearched,this.filterSelected,this.filterSelectedMarque);
  }


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}
