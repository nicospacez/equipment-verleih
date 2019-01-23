import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  products: any;

  constructor(private productService: ProductService) { }

  ngOnInit() {

    this.productService.getAllProducts().then(data => {

        this.products = data.produktDtoList.filter(produkt => produkt.status == "VERLIEHEN");
    

    })

  }

  

}
