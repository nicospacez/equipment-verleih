import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  private productList;
  viewChanger = false;
  productFilter:any;

  originList;

  constructor(private http: HttpClient, private router: Router, private productService: ProductService) {
    
   }

  ngOnInit() {
    this.productService.getAllProducts().then(data =>{
      console.log(data)
      this.productList = data;
      this.originList = data.produktDtoList;
    })
  }

  changeView(mode){
    if(mode == "list"){
      this.viewChanger = true;
    }else{
      this.viewChanger = false;
    }
  }

  goToDetailView(product) {

    this.productService.product = product;
    this.router.navigate(['productsDetailView/'+product.produktId]);

  }

  filterProducts(event){
    this.productList.produktDtoList = this.originList.filter(data=> data.langbezeichnung.toLowerCase().includes(event.toLowerCase()) || data.kategorie.kurzbezeichnung.toLowerCase().includes(event.toLowerCase()));
    if(event == ""){
      this.productList.produktDtoList = this.originList;
    }
    console.log(this.productList);
  }




}
