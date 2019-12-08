import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, config, Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';

import {UserDto} from '../interfaces/user-dto';
import {UserService} from './user.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<UserDto>;
  public currentUser: Observable<UserDto>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<UserDto>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserDto {
    return this.currentUserSubject.value;
  }

  login(mail, mdp) {
    return this.http.post<any>(`${UserService.getURAL_API()}/authenticate`, { mail, mdp })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  getDecodedToken() {
    //console.log(jwt_decode(this.getTokenFromLS()));
    return jwt_decode(this.getTokenFromLS());
  }

  getTokenFromLS() {
    //console.log(localStorage.getItem('currentUser'));
    return localStorage.getItem('currentUser');
  }

  getMail(): string {
    return this.getDecodedToken().unique_name;
  }
}
