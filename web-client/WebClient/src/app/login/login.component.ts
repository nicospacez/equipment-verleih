import { Component, OnInit } from '@angular/core';
import { User } from '../../entities';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  public users: User[];
  public inputUser: string;
  public inputPassword: string;
  public selectedUser: User = null;
  public loginFailed: Boolean = false;
  constructor(private service: RestService, private router: Router) {
    if (service.getUsers().length == 0) {
      this.service.usersLoaded.subscribe(() => {
        this.users = service.getUsers();
      })
    }
    else {
      this.users = service.getUsers();
    }
    console.log(this.users);
   }

  ngOnInit() {
  }

  public loginUser() {
    this.users.forEach(user => {
      if (this.inputUser == user.username) {
        this.selectedUser = user;
      }
    });
    if (this.selectedUser == null) {
      this.loginFailed = true;
    }
    else if (this.inputPassword === this.selectedUser.password) {
      this.navigateToLoglist();
      this.loginFailed = false;
    }
    else if (this.inputPassword != this.selectedUser.password) {
      this.loginFailed = true;
    }
  }

  public navigateToLoglist() {
    this.router.navigate(['home']);
  }
}
