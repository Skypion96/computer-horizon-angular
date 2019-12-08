import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {UserDto} from '../interfaces/user-dto';
import {PanierDTO} from '../interfaces/panier-dto';

@Injectable({
  providedIn: 'root'
})
export class CreatePanierService {

  private subject:Subject<PanierDTO> = new Subject<PanierDTO>();
  public $panierCreated:Observable<PanierDTO> = this.subject.asObservable();

  constructor() { }

  notify(panier : PanierDTO){
    this.subject.next(panier);
  }
}
