import { Injectable } from '@angular/core';
import {User} from '../interfaces/user';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(email:string, mdp:string){
    // @ts-ignore
    return this.http.post<User>('/api/login', {email, mdp}).shareReplay();
  }
}

