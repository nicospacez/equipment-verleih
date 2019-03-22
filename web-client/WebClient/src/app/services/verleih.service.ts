import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class VerleihService {

  baseUrl = "http://192.168.99.100:8080/jee/app/verleih";

  constructor(private http: HttpClient) { }

  ausleihen(sendJSON): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl, sendJSON).subscribe(data => {
        resolve(data);
      })
    });
  }

  getVerleihListOverUsername(userId): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl + '/getUsersVerleih/' + userId, { responseType: 'json' }).subscribe(data => {
        resolve(data);
      });
    });
  }

  doZuruecknahme(verleihId, userId): Promise<any> {

    let jsonObj = {
      "verleihId": verleihId,
      "zurueckgenommenVon": {
        "userId": userId
      }
    };

    return new Promise((resolve, reject) => {
      this.http.put(this.baseUrl, jsonObj).subscribe(data => {
        resolve(data);
      })
    });
  }

  getLatestVerleih(produktId): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl + '/getLatestVerleih/' + produktId).subscribe(data => {
        resolve(data);
      })
    })
  }
}
