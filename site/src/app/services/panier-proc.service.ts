import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {PanierProcDTO} from '../interfaces/panier-proc-dto';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PanierProcService {

  private static URAL_API: string = '/PanierProcesseur';
  constructor(public http:HttpClient) { }


  post(procs: PanierProcDTO): Observable<PanierProcDTO> {
    return this.http.post<PanierProcDTO>(PanierProcService.URAL_API, procs);
  }


}
