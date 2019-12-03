import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {UserDto} from '../interfaces/user-dto';
import {ProcDTO} from '../interfaces/procDTO';

@Injectable({
  providedIn: 'root'
})
export class CreateProcService {

  private subject:Subject<ProcDTO> = new Subject<ProcDTO>();
  public $procCreated:Observable<ProcDTO> = this.subject.asObservable();

  constructor() { }

  notify(proc : ProcDTO){
    this.subject.next(proc);
  }
}
