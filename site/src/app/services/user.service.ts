import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserDto, UserList} from '../interfaces/user-dto';
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

  post(user: UserDto): Observable<ProcDTO> {
    return this.http.post<ProcDTO>(UserService.URAL_API, user);
  }

  update(user:UserDto): Observable<any>{
    return this.http.put(UserService.URAL_API,user);
  }

  delete(nom:string): Observable<any>{
    return this.http.delete(UserService.URAL_API + "/" + nom);
  }

  register(user: UserDto) {
    return this.http.post(`${UserService.URAL_API}/users/register`, user);
  }

  static getURAL_API():string {
    return UserService.URAL_API;
  }
}
