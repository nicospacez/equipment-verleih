import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-detail-view',
  templateUrl: './products-detail-view.component.html',
  styleUrls: ['./products-detail-view.component.css']
})
export class ProductsDetailViewComponent implements OnInit {

  product: any;
  id: any;

  constructor(private productService: ProductService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.id = params['id'];
      this.getProduct();
    });

  }

  getProduct(){
    this.productService.getProductById(this.id).then(data =>{
      console.log(data);
      this.product = data;
    })
  }}