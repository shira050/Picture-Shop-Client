import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pToBasket } from 'src/app/classes/pToBasket';
import { InvaitesService } from 'src/servises/invaites.service';
import { PictursService } from 'src/servises/picturs.service';
import { UsersService } from 'src/servises/users.service';

@Component({
  selector: 'app-shoping-basket',
  templateUrl: './shoping-basket.component.html',
  styleUrls: ['./shoping-basket.component.css']
})
export class ShopingBasketComponent implements OnInit {
  pInBasket: pToBasket[];
  constructor(public ps: PictursService,public us: UsersService,public invaiteS: InvaitesService, public activateRouter: ActivatedRoute,public router:Router) {
    this.pInBasket =us.basket;
  }

  ngOnInit() {
  }
  DoInviteByB(): void {

    var card = prompt("הכנס סיסמת כרטיס אשראי");
    debugger
    try {
      {


        if (card != null) {
          this.invaiteS.DoInviteByBascet(this.us.user.codeUser,this.pInBasket).subscribe();
          this.us.basket.length=0
          this.router.navigate(['/bless']);

        }
        else if (card == null) {
          alert("סיסמא הכרחית להמשך פעילות!!! ")
        }

      }
    }
    catch (eror) {
      alert("תוכל לחכות לחודש הבא  ");
    }
  }
  delete(codePicture:number, finalPrice:number):void{
debugger;    this.us.finalPriceInBasket-=finalPrice;
    
    this.us.basket=this.us.basket.filter(x=>x.codePicture!=(codePicture));
  }
  add(p:pToBasket){
    this.us.finalPriceInBasket+=p.price;
for(let i=0;i<this.us.basket.length;i++)
{
  if(this.us.basket[i].codePicture==p.codePicture)
  {
    this.us.basket[i].finalPrice+=p.price;
    this.us.basket[i].count++;

  }
}
  }
  less(p:pToBasket){
    this.us.finalPriceInBasket-=p.price;
    for(let i=0;i<this.us.basket.length;i++)
{
  if(this.us.basket[i].codePicture==p.codePicture)
  {
    this.us.basket[i].finalPrice-=p.price;
    this.us.basket[i].count--;
    
  }
}
  }
}
