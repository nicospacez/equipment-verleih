import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product: any;
  baseUrl = "http://192.168.99.100:8080/jee/app/produkt";

  constructor(private http: HttpClient) { }

  getProductById(id): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl+ '/findById/' + id).subscribe(data => {
        resolve(data);
      });
    });
  }

  getAllProducts(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl).subscribe(data => {
        resolve(data);
      });
    });
  }

}