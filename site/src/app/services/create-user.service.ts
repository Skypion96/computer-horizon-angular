import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {User} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  private subject:Subject<User> = new Subject<User>();
  public $userCreated:Observable<User> = this.subject.asObservable();

  constructor() { }

  notify(user : User){
    this.subject.next(user);
  }

}
