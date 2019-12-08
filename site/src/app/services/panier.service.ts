import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {PanierCarteGraphiqueDto, PanierCGList} from '../interfaces/panier-carte-graphique-dto';
import {HttpClient} from '@angular/common/http';
import {PanierDTO, PanierList} from '../interfaces/panier-dto';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private static URAL_API: string = '/Panier';

  constructor(public http:HttpClient) { }

  queryBase():Observable<PanierList>{
    return this.http.get<PanierList>(PanierService.URAL_API);
  }

  post(panier: PanierDTO): Observable<PanierDTO> {
    return this.http.post<PanierDTO>(PanierService.URAL_API, panier);
  }
}
