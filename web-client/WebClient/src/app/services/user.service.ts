import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://192.168.99.100:8080/jee/app/user";

  constructor(private http: HttpClient) { }

  getAllKlassen(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl + '/getAllKlassen').subscribe(data => {
        resolve(data);
      });
    });
  }

  getUserByKlasse(klasse): Promise<any>{
    return new Promise((resolve,reject) =>{
      this.http.get(this.baseUrl+ "/getUserToKlasse/"+klasse).subscribe(data =>{
        resolve(data);
      })
    })
  }
}
