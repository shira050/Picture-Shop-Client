import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from 'src/app/classes/user';
import { picture } from 'src/app/classes/picture';
import { pToBasket } from 'src/app/classes/pToBasket';
// import { appendFile } from 'fs';
import { AppComponent } from 'src/app/app.component';

@Injectable()
export class UsersService {
  user:user=new user(2, "שירהחדש","1234","") ;
  users:user[];
  menneger_pass:string;
  isMenneger:boolean=true;
  basket:pToBasket[]=new Array<pToBasket>();
  finalPriceInBasket:number=0;
  userURL="http://localhost:9207/api/Users";
  u: Observable<user> ;
a:AppComponent;
  constructor(private http: HttpClient) {
  }
  LoadUser(u:user):void{
    debugger
this.user=u;
this.basket=new Array<pToBasket>();
this.finalPriceInBasket=0;
// this.a.login();
  }
  getAll(): Observable<user[]> {
    return this.http.get<user[]>(this.userURL+'/GetAllUsers')
  }
  getUserFromserverBynameAndPass(name:string,pass:string): Observable<user> {
     this.u= this.http.get<user>(this.userURL+"?name="+name+"&password="+pass);
  //  this.LoadUser(this.u);
    return this.u;
  }
  ReadMenegerPassword(): Observable<user> {
    return this.http.get<user>(this.userURL+"/ReadMenegerPassword")
  }
  addNewUser(newUser: user): Observable<user[]> {
    return this.http.post<user[]>(this.userURL, newUser)
  }

  deleteUser(id: number): Observable<user[]> {
    return this.http.delete<user[]>(this.userURL+"/RemoveUser/"+id)
  }
  updateUser(user: user): Observable<user[]> {
    return this.http.put<user[]>(this.userURL+"/UppdateUser/"+user.codeUser,user)
  }
  addToBasket(p:pToBasket):void{
    debugger
    this.basket.push(p);
    this.finalPriceInBasket+=p.finalPrice;
  }

}
