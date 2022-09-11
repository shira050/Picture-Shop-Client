import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { category } from 'src/app/classes/category';
import { CategoriesService } from 'src/servises/categories.service';

@Component({
  selector: 'app-add-new-category',
  templateUrl: './add-new-category.component.html',
  styleUrls: ['./add-new-category.component.css']
})
export class AddNewCategoryComponent implements OnInit {
id:number;
newCategory: category = new category(0);

  constructor(private service: CategoriesService,public router:Router,public activeRouter:ActivatedRoute) {

    this.activeRouter.params.subscribe(
      param => {
        this.id=param["id"]
      })
      if(this.id==0)
      this.newCategory=new category(0);
     else{
     service.getCategoryByCode(this.id).subscribe(d=> this.newCategory=d);

     }
    
   }
  ngOnInit(): void {
  }
  addCategory() {
    if(this.id==0){
    debugger
    this.service.addNewCategory(this.newCategory).subscribe(
      data => {debugger; this.service.categories = data;alert("הקטגוריה "+this.newCategory.nameCategory+" נוספה בהצלחה ");      this.router.navigate(['/kategory']);
    },
      err => console.log(err)
    )
    }
    else{
      debugger
      this.service.updateCategory(this.newCategory).subscribe(
        data => {debugger; this.service.categories = data;
          alert("הקטגוריה "+this.newCategory.nameCategory+" עודכנה בהצלחה ");      this.router.navigate(['/kategory']);
      },
        err => console.log(err)
      )
    }
  }


}
