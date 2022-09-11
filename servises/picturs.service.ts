import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { picture } from 'src/app/classes/picture';
import { pToBasket } from 'src/app/classes/pToBasket';
@Injectable()
export class PictursService {
  getCategoryByCode(id: number) {
    throw new Error('Method not implemented.');
  }
  picture:picture;
  pictures:picture[];
  picturesInOneKategory:picture[];
  picturesOfOneUser:picture[];
  PicturesURL = "http://localhost:9207/api/Products";
  constructor(private http: HttpClient) {

  }
  
  getAll(): Observable<picture[]> {
    return this.http.get<picture[]>(this.PicturesURL+'/GetAllProducts')
  }
  getPictureByCode(code:number): Observable<picture> {
    return this.http.get<picture>(this.PicturesURL + "?code=" + code)
  }
  AddPicture(newPicture: picture): Observable<picture[]> {
    return this.http.post<picture[]>(this.PicturesURL, newPicture)
  }

  deletePicture(id: number): Observable<picture[]> {
    return this.http.delete<picture[]>(this.PicturesURL + "/RemoveProduct/" + id)
  }
  updatePicture(p: picture): Observable<picture[]> {
    return this.http.put<picture[]>(this.PicturesURL + "/UppdateProduct/" + p.codePicture, p)
  }

  
  GetAllPicturesInKategory(codeCategory:number): Observable<picture[]> {
    return this.http.get<picture[]>(this.PicturesURL + "/GetAllProductsInCategory/" + codeCategory)
  }

  
  // GetAllPicturesOfOneUser(codeUser:number): Observable<pToBasket[]> {
  //   return this.http.get<pToBasket[]>(this.PicturesURL + "/GetAllPicturesOfOneUser/" + codeUser)
  // }
}
