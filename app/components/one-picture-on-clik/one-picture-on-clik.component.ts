import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { picture } from 'src/app/classes/picture';
import { pToBasket } from 'src/app/classes/pToBasket';
import { PictursService } from 'src/servises/picturs.service';
import { UsersService } from 'src/servises/users.service';

@Component({
  selector: 'app-one-picture-on-clik',
  templateUrl: './one-picture-on-clik.component.html',
  styleUrls: ['./one-picture-on-clik.component.css']
})
export class OnePictureOnClikComponent implements OnInit {
id:number;
pic:picture;
picB:pToBasket;
  constructor(private activateRouter: ActivatedRoute,private ps:PictursService,private us:UsersService,private router:Router) {
     this.activateRouter.params.subscribe(
    param => {
      this.id=param["id"]
      
    }) 
    debugger
  ps.getPictureByCode(this.id).subscribe(d=>this.pic=d);
  
  }
   
  ngOnInit() {
    
  }
  
  addToB():void {
    debugger
    if(this.us.user.codeUser ==0)
    {
      debugger;
      alert("על מנת להוסיף פרטים עליך להירשם או להיכנס אם יש לך חשבון כבר");
      this.router.navigate(['/sign_in']);
  }
  else
  {
    this.picB=new pToBasket(this.pic.codePicture,this.pic.namePicture,1,this.pic.price,this.pic.image,this.pic.price);

    this.us.addToBasket(this.picB);
     alert("המוצר נוסף בהצלחה");
 }
   
    }
}
