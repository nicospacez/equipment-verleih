import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private readonly baseurl = 'http://192.168.99.100:8080/jee/app/jwt';


  public getTokenWithCredentials(username: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const body = { username: username, password: password };
      this.http.post(`${this.baseurl}`, body, { responseType: 'text' }).subscribe(result => {
        console.log(result);
        resolve(true)
        if (result) {
          localStorage.setItem('token', result);
        }
      },
        (err) => resolve(false)
      );
    })
  }
}
