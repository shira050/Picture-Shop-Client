import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { picture } from 'src/app/classes/picture';
import { PictursService } from 'src/servises/picturs.service';
import { UsersService } from 'src/servises/users.service';


@Component({
  selector: 'app-show-pictures',
  templateUrl: './show-pictures.component.html',
  styleUrls: ['./show-pictures.component.css']
})
export class ShowPicturesComponent implements OnInit {
  p:picture[];
  id:number;
  c: any;
  menneger:boolean;

  constructor(public router:Router,public ps:PictursService,public activateRouter:ActivatedRoute,public us:UsersService) {
   this.menneger=us.isMenneger ;
    this.activateRouter.params.subscribe(
      param => {
        this.id=param["id"]
      })
      if(this.id==0)
      ps.getAll().subscribe(d=>this.p=d);
      else
      ps.GetAllPicturesInKategory(this.id).subscribe(d=>this.p=d);
    
    
  }
  delete(id:number):void{
    this.ps.deletePicture(id).subscribe(
     
      data =>{ this.p = data;
        alert("מוצר נמחק בהצלחה");debugger
     },
     error=>{
      alert("שגיאה במחיקת מוצר");debugger

     })
  }
  ngOnInit() {
  }
  
}
