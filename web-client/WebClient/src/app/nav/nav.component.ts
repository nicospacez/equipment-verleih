import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  //ist Administrator #boss
  isAdmin = false;

  //in Administrator #nohomo
  inAdmin = false;
  user: any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.isAdmin = this.authService.isAdmin();

    this.user = this.authService.getUser();

    this.router.events.subscribe(event => {

      if (this.router.url.includes('admin')) {

        this.inAdmin = true;

      } else {

        this.inAdmin = false;

      }

    })

  }

  public logoutUser() {
    localStorage.removeItem('token');
    window.location.reload();
  }



}






