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

  private productList
  constructor(private http: HttpClient, private router: Router, private productService: ProductService) {
    
   }

  ngOnInit() {
    this.http.get('http://192.168.99.100:8080/jee/app/produkt').subscribe(data =>{
      this.productList = data;

      /*
      this.productList.forEach(element => {

        var imageBase64 = element.foto;
        var blob = new Blob([imageBase64], {type: 'image/png'});
        element.foto = new File([blob], 'imageFileName.png');

      })
      */




    })
  }

  goToDetailView(product) {

    this.productService.product = product;
    this.router.navigate(['productsDetailView/'+product.produktId]);

  }




}
