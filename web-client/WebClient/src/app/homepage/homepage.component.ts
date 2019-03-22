import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { VerleihService } from '../services/verleih.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  products: any;

  constructor(private verleihService: VerleihService, private authService: AuthService, private productService: ProductService, private router: Router) { }

  ngOnInit() {

    this.verleihService.getVerleihListOverUsername(this.authService.getUser().userId).then(data =>{
      console.log(data)
      this.products = data;
    })
  }

  goToDetailView(product) {

    this.productService.product = product;
    this.router.navigate(['productsDetailView/'+product.produktId]);

  }

  

}
