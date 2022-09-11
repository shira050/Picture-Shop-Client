import { Component } from '@angular/core';
import { CategoriesService } from 'src/servises/categories.service';
import { PictursService } from 'src/servises/picturs.service';
import { UsersService } from 'src/servises/users.service';
import { category } from './classes/category';
import { picture } from './classes/picture';

import { user } from './classes/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  users: user[];
  newUser: user ;
  pictures: picture[];
  newPicture: picture = new picture(0);
  categories: category[];
  newCategory: category = new category(0);

  constructor(public UserService: UsersService,public pictureService:PictursService, public categoryService:CategoriesService) {
    this.newUser=this.UserService.user;
    // alert(this.newUser.nameUser)
debugger
  }

  ngOnInit() {
  this.newUser=this.UserService.user;
  debugger
    // this.UserService.getAll().subscribe(
    //   data => this.users = data,
    //   err => console.log(err)
    // )
    // this.pictureService.getAll().subscribe(
    //   data => this.pictures = data,
    //   err => console.log(err)
    // )
    // this.categoryService.getAll().subscribe(
    //   data => this.categories = data,
    //   err => console.log(err)
    // )
  }
  login():void{
    this.newUser=this.UserService.user;
  }
 
  // add() {
  //   this.service.addNewTeacher(this.newTeacher).subscribe(
  //     data => this.teachers = data,
  //     err => console.log(err)
  //   )

  // }

  // save() {
  //   debugger
  //   if (this.teachers.find(t => t.Id == this.newTeacher.Id)) {
  //     this.update(this.newTeacher)
  //   }
  //   else {
  //     this.add()
  //   }
  //   this.newTeacher=new teacher();
  // }

  // update(teacher: teacher) {
  //   this.service.updateTeacher(teacher).subscribe(
  //     data => this.teachers = data,
  //     err => console.log(err)
  //   )
  // }

  // edit(teacher: teacher) {
  //   this.newTeacher = teacher;

  // }
  // delete(id: number) {
  //   this.service.deleteTeacher(id).subscribe(
  //     data => this.teachers = data,
  //     err => console.log(err)
  //   )

  // }
}
