import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/classes/user';
import { UsersService } from 'src/servises/users.service';

@Component({
  selector: 'app-menneger',
  templateUrl: './menneger.component.html',
  styleUrls: ['./menneger.component.css']
})
export class MennegerComponent implements OnInit {
  customer!:user
  name:string;
  password!:string;
  passwordM:string;
  constructor(private service: UsersService) { }

  ngOnInit() {
  }
  getCustomer(){
    if(this.passwordM=="1234"){
    this.service.getUserFromserverBynameAndPass(this.name,this.password).subscribe(
      data =>{debugger; this.customer = data; alert("ברוך הבא"+this.customer.nameUser);  
        this.service.LoadUser(this.customer);
        this.service.isMenneger=true;
    },
      err => console.log(err)
     
  )
  alert("ברוך הבא מנהל שים לב להתנתק לפני צאתך מהמערכת")
}
  else{
    alert("שגוי")
  }

  }

}
