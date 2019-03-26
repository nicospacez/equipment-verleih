import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product: any;
  baseUrl = "http://192.168.99.100:8080/jee/app/produkt";



  constructor(private http: HttpClient) { }

  getProductById(id): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl + '/findById/' + id).subscribe(data => {
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

  createProdukt(data): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl, data).subscribe(data => {
        resolve(data);
      })
    });
  }


  uploadCSV(file, kategorieId) {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    const _headers = new HttpHeaders();
    const headers = _headers.append('Content-Type', 'multipart/form-data; boundary=--xxxxSEPARATIONxxxx--');
    this.http.post(this.baseUrl + '/csvUpload/1', formData, { headers: headers }).subscribe(data => {
      console.log(data)
    })
  }


}