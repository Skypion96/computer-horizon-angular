import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, config, Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';

import {UserDto} from '../interfaces/user-dto';
import {UserService} from './user.service';
import {AdminDto} from '../interfaces/admin-dto';
import {AdminService} from './admin.service';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService implements CanActivate{
  private currentUserSubject: BehaviorSubject<UserDto>;
  public currentUser: Observable<UserDto>;
  private currentAdminSubject: BehaviorSubject<AdminDto>;
  public currentAdmin: Observable<AdminDto>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<UserDto>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    this.currentAdminSubject = new BehaviorSubject<AdminDto>(JSON.parse(localStorage.getItem('currentAdmin')));
    this.currentAdmin = this.currentAdminSubject.asObservable();
  }


  public get currentUserValue(): UserDto {
    return this.currentUserSubject.value;
  }

  public get currentAdminValue(): AdminDto {
    return this.currentAdminSubject.value;
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

  loginAdmin(mail, mdp) {
    return this.http.post<any>(`${AdminService.getURL_API()}/authenticate`, { mail, mdp })
      .pipe(map(admin => {
        localStorage.setItem('currentAdmin', JSON.stringify(admin));
        this.currentAdminSubject.next(admin);
        return admin;
      }));
  }
  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
  logoutAdmin() {
    localStorage.removeItem('currentAdmin');
    this.currentAdminSubject.next(null);
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

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem("currentUser") != null){
      return true;
    }
    return false;
  }


}
