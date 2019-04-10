import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReservierungService {

  baseUrl = "http://192.168.99.100:8080/jee/app/reservierung";

  constructor(private http: HttpClient) { }

  reservieren(sendJSON): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl, sendJSON).subscribe(data => {
        resolve(data);
      })
    });
  }

  getReservierListOverUsername(userId): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl + '/findUsersReservierung/' + userId, { responseType: 'json' }).subscribe(data => {
        resolve(data);
      });
    });
  }

  getLatestReservierungenByProductId(productId): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl + '/findLatestReservierung/' + productId, { responseType: 'json' }).subscribe(data => {
        resolve(data);
      });
    });
  }
}
