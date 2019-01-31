import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public shownav: boolean = true;
  constructor(private router: Router){

    this.router.events.subscribe(data =>{
      if(window.location.pathname=="/login"){
        this.shownav=false;
      }
      else{
        this.shownav = true;
      }
    })

    console.log(window.location.pathname)

  }
  title = 'app';
}