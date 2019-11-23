import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProcServiceService} from "../services/proc-service.service";
import {ProcInterface, ProcList} from '../interfaces/proc-interface';
import {Subscription} from "rxjs";
import {reduce} from 'rxjs/operators';
import {ProcesseurPipePipe} from '../pipes/processeur-pipe.pipe';
import {ProcPrix} from '../enums/proc-prix.enum';
import {ProcMarque} from '../enums/proc-marque.enum';

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

  readonly TYPE_FILTER =[{
    id: 'Tout',
    value: ProcPrix.ALL
  },{
    id: 'Inférieur à 400',
    value: ProcPrix.SUP400
  },{
    id: 'Inférieur à 1000',
    value: ProcPrix.SUP1000
  },{
    id: 'Supérieur à 1000',
    value: ProcPrix.SUP1001
  }];
  filterSelected: ProcPrix = ProcPrix.ALL;

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

}
