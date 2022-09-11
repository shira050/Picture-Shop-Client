import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/classes/user';
import { UsersService } from 'src/servises/users.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private service: UsersService) { }
name:string;
  password!:string
  customer!:user
  ngOnInit(): void {
  }
  getCustomer(){
    this.service.getUserFromserverBynameAndPass(this.name,this.password).subscribe(
      data =>{debugger; this.customer = data; alert("ברוך הבא"+this.customer.nameUser);  
        this.service.LoadUser(this.customer);
    },
      err => console.log(err)
     
    )
  }
}
