import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {ProcDTO} from '../interfaces/procDTO';
import {CarteGDTO} from '../interfaces/carte-gDTO';

@Injectable({
  providedIn: 'root'
})
export class CreateCarteGService {

  private subject:Subject<CarteGDTO> = new Subject<CarteGDTO>();
  public $carteGCreated:Observable<CarteGDTO> = this.subject.asObservable();

  constructor() { }

  notify(carteG : CarteGDTO){
    this.subject.next(carteG);
  }
}
