import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  private productList
  constructor(private http: HttpClient) {
    
   }

  ngOnInit() {
    this.http.get('http://192.168.99.100:8080/jee/app/produkt').subscribe(data =>{
      this.productList = data;
      console.log(this.productList)
    })
  }

}