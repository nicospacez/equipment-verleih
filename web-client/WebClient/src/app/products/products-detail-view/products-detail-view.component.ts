import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-detail-view',
  templateUrl: './products-detail-view.component.html',
  styleUrls: ['./products-detail-view.component.css']
})
export class ProductsDetailViewComponent implements OnInit {

  product: any;

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit() {

    this.product = this.productService.product;

  }

  


}
