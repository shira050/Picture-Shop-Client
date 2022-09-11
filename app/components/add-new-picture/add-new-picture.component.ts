import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { category } from 'src/app/classes/category';
import { picture } from 'src/app/classes/picture';
import { user } from 'src/app/classes/user';
import { CategoriesService } from 'src/servises/categories.service';
import { PictursService } from 'src/servises/picturs.service';

@Component({
  selector: 'app-add-new-picture',
  templateUrl: './add-new-picture.component.html',
  styleUrls: ['./add-new-picture.component.css']
})
export class AddNewPictureComponent implements OnInit {
  newP: picture = new picture(0);
  categories:category[];
  num:number=0;
  id:number;

  constructor(private service: PictursService,public cs:CategoriesService,public router:Router,public activeRouter:ActivatedRoute) {

    this.activeRouter.params.subscribe(
      param => {
        this.id=param["id"]
      })
      if(this.id==0)
      this.newP=new picture(0);
     else{
    service.getPictureByCode(this.id).subscribe(d=>this.newP=d);

     }
    
   
    this.cs.getAll().subscribe(d=>this.categories=d);

   }
  
  
  ngOnInit(): void {
  }
  addPicture() {
    if(this.id==0){
      debugger
    this.service.AddPicture(this.newP).subscribe(
      data => {this.service.pictures = data;alert(this.newP.namePicture+" נוסף בהצלחה "); this.router.navigate(['/Pictures',this.num]);    },
      err => console.log(err)
    )
      }
      else{
        debugger
        this.service.updatePicture(this.newP).subscribe(
          data => {
            debugger;
             this.service.pictures = data;
            alert("התמונה "+this.newP.namePicture+" עודכנה בהצלחה ");   
             this.router.navigate(['/Pictures',this.num]);
        },
          err => console.log(err)
        )
      }
    }
  
  


}
