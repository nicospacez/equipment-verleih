import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product: any;
  baseUrl = "http://192.168.99.100:8080/jee/app/";

  constructor(private http: HttpClient) { }

  getProductById(id): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl+ 'produkt/findById/' + id).subscribe(data => {
        resolve(data);
      });
    });
  }

  getAllProducts(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl+ 'produkt').subscribe(data => {
        resolve(data);
      });
    });
  }

  ausleihen(sendJSON){
    this.http.post(this.baseUrl+'verleih', sendJSON).subscribe(data =>{
      console.log(data)
    })
  }

  createProdukt(data){
    this.http.post(this.baseUrl+'produkt', data).subscribe(data =>{
      console.log(data)
    })
  }

}