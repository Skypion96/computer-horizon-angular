import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserDto, UserList} from '../interfaces/user-dto';
import {AdminDto} from '../interfaces/admin-dto';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

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
}
