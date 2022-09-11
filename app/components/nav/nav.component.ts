import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/classes/user';
import { UsersService } from 'src/servises/users.service';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  num:number=0;
  n:string='';
  p:string='';
  user:user;
  menneger:Boolean=true;
  constructor(us:UsersService) {
    this.user=us.user;
    this.menneger=us.isMenneger 
  debugger
}

  ngOnInit() {
  }

}
