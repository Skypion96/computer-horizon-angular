import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {UserDto} from '../interfaces/user-dto';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  private subject:Subject<UserDto> = new Subject<UserDto>();
  public $userCreated:Observable<UserDto> = this.subject.asObservable();

  constructor() { }

  notify(user : UserDto){
    this.subject.next(user);
  }

}
