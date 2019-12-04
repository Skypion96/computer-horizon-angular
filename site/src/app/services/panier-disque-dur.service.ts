import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PanierProcDTO} from '../interfaces/panier-proc-dto';
import {Observable} from 'rxjs';
import {PanierDisqueDurDto} from '../interfaces/panier-disque-dur-dto';
import {CarteGList} from '../interfaces/carte-gDTO';
import {DisqueDList} from '../interfaces/disque-dDTO';

@Injectable({
  providedIn: 'root'
})
export class PanierDisqueDurService {

  private static URAL_API: string = '/PanierDisqueDur';
  constructor(public http:HttpClient) { }

  queryBase():Observable<DisqueDList>{
    return this.http.get<DisqueDList>(PanierDisqueDurService.URAL_API);
  }

  post(disqueDs: PanierDisqueDurDto): Observable<PanierDisqueDurDto> {
    return this.http.post<PanierDisqueDurDto>(PanierDisqueDurService.URAL_API, disqueDs);
  }
}
