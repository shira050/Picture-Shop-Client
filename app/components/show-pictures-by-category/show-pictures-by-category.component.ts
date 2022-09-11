import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { category } from 'src/app/classes/category';
import { CategoriesService } from 'src/servises/categories.service';
import { UsersService } from 'src/servises/users.service';

@Component({
  selector: 'app-show-pictures-by-category',
  templateUrl: './show-pictures-by-category.component.html',
  styleUrls: ['./show-pictures-by-category.component.css']
})
export class ShowPicturesByCategoryComponent implements OnInit {
c:category[];
menneger:boolean;
  constructor(public cs:CategoriesService,public us:UsersService) {
    this.menneger=us.isMenneger ;

    cs.getAll().subscribe(d=>this.c=d)
   
   }

  ngOnInit() {
  }
  delete(id:number):void{
    this.cs.deleteCategory(id).subscribe(
     
      data =>{ this.c = data;debugger
        alert("קטגוריה נמחק בהצלחה")
     },
     error=>{
      alert("שגיאה במחיקת קטגוריה")

     })
  }

}
