import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {DisqueDDTO} from '../interfaces/disque-dDTO';
import {OrdiDTO} from '../interfaces/ordiDTO';

@Injectable({
  providedIn: 'root'
})
export class CreateOrdiService {

  private subject:Subject<OrdiDTO> = new Subject<OrdiDTO>();
  public $ordiCreated:Observable<OrdiDTO> = this.subject.asObservable();

  constructor() { }

  notify(ordi : OrdiDTO){
    this.subject.next(ordi);
  }}
