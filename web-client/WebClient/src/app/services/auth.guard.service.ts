import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}

@Injectable({
  providedIn: 'root'
})
export class IsAdmin implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(): boolean {
    if (!this.auth.isAdmin()) {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}
