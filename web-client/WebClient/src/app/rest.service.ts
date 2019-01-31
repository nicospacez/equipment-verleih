import { Injectable, EventEmitter } from '@angular/core';
import { User } from '../entities';
import { HttpClient } from '../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private users: User[] = [];
  public usersLoaded = new EventEmitter<void>();
  public logListLoaded = new EventEmitter<void>();
  constructor(http: HttpClient) { 
    http.get<User[]>('../assets/user.json').subscribe(data =>{
      this.users = data;

      this.usersLoaded.emit();
    });
  }

  public getUsers(): User[]{
    return this.users;
  }
}
