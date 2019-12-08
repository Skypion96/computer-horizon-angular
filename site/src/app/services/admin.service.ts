import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserDto, UserList} from '../interfaces/user-dto';
import {AdminDto} from '../interfaces/admin-dto';
import {AuthenticationService} from './authentification.service';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService implements CanActivate{

  private static URL_API: string = '/Admin';

  constructor(public http:HttpClient) { }


  post(admin: AdminDto): Observable<AdminDto> {
    return this.http.post<AdminDto>(AdminService.URL_API, admin);
  }

  register(admin: AdminDto) {
    return this.http.post(`${AdminService.URL_API}/users/register`, admin);
  }

  static getURL_API():string {
    return AdminService.URL_API;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem("currentAdmin") != null){
      return true;
    }
    return false;
  }
}
