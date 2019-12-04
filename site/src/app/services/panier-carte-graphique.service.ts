import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PanierDisqueDurDto} from '../interfaces/panier-disque-dur-dto';
import {Observable} from 'rxjs';
import {PanierCarteGraphiqueDto} from '../interfaces/panier-carte-graphique-dto';
import {ProcList} from '../interfaces/procDTO';
import {CarteGList} from '../interfaces/carte-gDTO';

@Injectable({
  providedIn: 'root'
})
export class PanierCarteGraphiqueService {

  private static URAL_API: string = '/PanierCarteGraphique';
  constructor(public http:HttpClient) { }

  queryBase():Observable<CarteGList>{
    return this.http.get<CarteGList>(PanierCarteGraphiqueService.URAL_API);
  }

  post(cartesGs: PanierCarteGraphiqueDto): Observable<PanierCarteGraphiqueDto> {
    return this.http.post<PanierCarteGraphiqueDto>(PanierCarteGraphiqueService.URAL_API, cartesGs);
  }

  delete(nom:string): Observable<any>{
    return this.http.delete(PanierCarteGraphiqueService.URAL_API + "/" + nom);
  }
}
