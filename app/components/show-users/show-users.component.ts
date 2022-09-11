import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/classes/user';
import { UsersService } from 'src/servises/users.service';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {
  users:user[];
  constructor(public UserService: UsersService) {
    this.UserService.getAll().subscribe(
     
      data => this.users = data)
   }

  ngOnInit() {
    // this.UserService.getAll().subscribe(
    //   data => this.users = data,
    //   err => console.log(err)
    // )
     console.log("llll"+this.users);

  }
  delete(id:number):void{
    this.UserService.deleteUser(id).subscribe(
     
      data =>{ this.users = data;
        alert("לקוח נמחק בהצלחה")
     },
     error=>{
      alert("שגיאה במחיקת לקוח")

     })
  }

}
