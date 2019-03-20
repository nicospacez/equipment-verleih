import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { VerleihService } from '../services/verleih.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  products: any;

  constructor(private verleihService: VerleihService, private authService: AuthService) { }

  ngOnInit() {

    this.verleihService.getVerleihListOverUsername(this.authService.getUser().username).then(data =>{
      console.log(data)
      this.products = data;
    })
  }

  

}
