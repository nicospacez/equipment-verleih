import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VerleihService {

  baseUrl = "http://192.168.99.100:8080/jee/app/verleih";

  constructor(private http: HttpClient) { }

  ausleihen(sendJSON) {
    this.http.post(this.baseUrl, sendJSON).subscribe(data => {
      console.log(data)
    })
  }

  getVerleihListOverUsername(username): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl + '/getUsersVerleih/' + username, {responseType: 'json'}).subscribe(data => {
        resolve(data);
      });
    });
  }
}
