import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { invaite } from 'src/app/classes/invaite';
import { picture } from 'src/app/classes/picture';
import { pToBasket } from 'src/app/classes/pToBasket';
@Injectable()
export class InvaitesService {
  invite:invaite;
  invaites:picture[];
  ShopingBasket:picture[];
  inviteURL = "http://localhost:9207/api/Invaites";
  constructor(private http: HttpClient) {

  }
  

  DoInviteByBascet(id: number,Basket:pToBasket[]): Observable<invaite[]> {
    debugger;
    return this.http.post<invaite[]>(this.inviteURL + "?idUser=" + id, Basket)
  }


}
