import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User, UserList} from '../interfaces/user';
import {ProcDTO} from '../interfaces/procDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private static URAL_API: string = '/Utilisateur';
  constructor(public http:HttpClient) { }

  queryBase():Observable<UserList>{
    return this.http.get<UserList>(UserService.URAL_API);
  }

  post(user: User): Observable<ProcDTO> {
    return this.http.post<ProcDTO>(UserService.URAL_API, user);
  }

  update(user:User): Observable<any>{
    return this.http.put(UserService.URAL_API,user);
  }

  delete(nom:string): Observable<any>{
    return this.http.delete(UserService.URAL_API + "/" + nom);
  }

  register(user: User) {
    return this.http.post(`${UserService.URAL_API}/users/register`, user);
  }

  static getURAL_API():string {
    return UserService.URAL_API;
  }
}