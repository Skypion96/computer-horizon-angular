import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PanierCarteGraphiqueDto, PanierCGList} from '../interfaces/panier-carte-graphique-dto';

@Injectable({
  providedIn: 'root'
})
export class PanierCarteGraphiqueService{

  private static URAL_API: string = '/PanierCarteGraphique';
  constructor(public http:HttpClient) { }

  queryBase():Observable<PanierCGList>{
    return this.http.get<PanierCGList>(PanierCarteGraphiqueService.URAL_API);
  }

  post(cartesGs: PanierCarteGraphiqueDto): Observable<PanierCarteGraphiqueDto> {
    return this.http.post<PanierCarteGraphiqueDto>(PanierCarteGraphiqueService.URAL_API, cartesGs);
  }

  delete(nom:string): Observable<any>{
    return this.http.delete(PanierCarteGraphiqueService.URAL_API + "/" + nom);
  }
}
