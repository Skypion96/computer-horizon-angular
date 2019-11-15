import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ProcInterface, ProcList} from '../interfaces/proc-interface';
import {HttpClient} from '@angular/common/http';
import {User, UserList} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private static URAL_API: string = '/Utilisateur';
  constructor(public http:HttpClient) { }

  queryBase():Observable<UserList>{
    return this.http.get<UserList>(UtilisateurService.URAL_API);
  }

  post(user: User): Observable<ProcInterface> {
    return this.http.post<ProcInterface>(UtilisateurService.URAL_API, user);
  }

  update(user:User): Observable<any>{
    return this.http.put(UtilisateurService.URAL_API,user);
  }

  delete(nom:string): Observable<any>{
    return this.http.delete(UtilisateurService.URAL_API + "/" + nom);
  }
}
