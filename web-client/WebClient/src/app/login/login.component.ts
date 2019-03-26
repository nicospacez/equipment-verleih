import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public inputUser: string;
  public inputPassword: string;
  public loginFailed: Boolean = false;
  public loggedIn;
  constructor(private router: Router, private ls: LoginService) {
  }

  ngOnInit() {

  }

  public loginUser() {
    this.ls.getTokenWithCredentials(this.inputUser, this.inputPassword).then(success => {

      console.log(success)

      if (success) {
        this.navigateToAccount();
      } else {
        this.loginFailed = true;
      }
    });
  }

  public navigateToAccount() {
    this.router.navigate(['home']);
  }

  enterPressed() {
    this.loginUser();
  }
}
