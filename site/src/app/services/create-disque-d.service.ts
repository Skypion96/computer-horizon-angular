import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {CarteGDTO} from '../interfaces/carte-gDTO';
import {DisqueDDTO} from '../interfaces/disque-dDTO';

@Injectable({
  providedIn: 'root'
})
export class CreateDisqueDService {

  private subject:Subject<DisqueDDTO> = new Subject<DisqueDDTO>();
  public $disqueDCreated:Observable<DisqueDDTO> = this.subject.asObservable();

  constructor() { }

  notify(disqueD : DisqueDDTO){
    this.subject.next(disqueD);
  }
}
