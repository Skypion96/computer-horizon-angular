import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {PanierProcDTO} from '../interfaces/panier-proc-dto';
import {HttpClient} from '@angular/common/http';
import {ProcList} from '../interfaces/procDTO';


@Injectable({
  providedIn: 'root'
})
export class PanierProcService {

  private static URAL_API: string = '/PanierProcesseur';
  constructor(public http:HttpClient) { }


  queryBase():Observable<ProcList>{
    return this.http.get<ProcList>(PanierProcService.URAL_API);
  }

  post(procs: PanierProcDTO): Observable<PanierProcDTO> {
    return this.http.post<PanierProcDTO>(PanierProcService.URAL_API, procs);
  }


}
