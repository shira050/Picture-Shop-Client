import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from 'src/app/classes/user';
import { UsersService } from 'src/servises/users.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {
  newCustomer: user = new user(0);
  name:string;
pass:string;
  constructor(private service: UsersService,public router:Router,public activeRouter:ActivatedRoute) {
    this.activeRouter.params.subscribe(  param => {
      this.name=param["name"]
      this.pass=param["pass"]

    })
    if(this.pass==null)
    this.newCustomer=new user(0);
   else{
   service.getUserFromserverBynameAndPass(this.name,this.pass).subscribe(d=> this.newCustomer=d);

   }
   }
  ngOnInit(): void {
  }
  addCustomer() {
    debugger

    if(this.pass==null){
      debugger
      this.service.addNewUser(this.newCustomer).subscribe(
        data => {this.service.users = data;alert(this.newCustomer.nameUser+" נוסף בהצלחה ")},
        err => console.log(err)
      )
    
      }
      else{
        debugger
        this.service.updateUser(this.newCustomer).subscribe(
          data => {debugger; this.service.users = data;
            alert(this.newCustomer.nameUser+" עודכן בהצלחה ");  
            this.service.LoadUser(this.newCustomer);
              this.router.navigate(['/users']);
        },
          err => console.log(err)
        )
      }

    
  }

}
