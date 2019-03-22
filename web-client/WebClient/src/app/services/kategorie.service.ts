import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class KategorieService {

  baseUrl = "http://192.168.99.100:8080/jee/app/kategorie/";

  constructor(private http: HttpClient) { }

  getAllKategorien(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl).subscribe(data => {
        resolve(data);
      });
    });
  }

  createKategorie(sendJSON){
    this.http.post(this.baseUrl, sendJSON).subscribe(data =>{
      console.log(data)
    })
  }
}
