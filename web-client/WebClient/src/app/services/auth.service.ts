import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(public jwtHelper: JwtHelperService, private router: Router) { }

    cachedRequests: Array<HttpRequest<any>> = [];

    public isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        // Check whether the token is expired and return
        // true or false
        //console.log(this.jwtHelper.isTokenExpired(token), this.jwtHelper.decodeToken(token));

        return !this.jwtHelper.isTokenExpired(token);
        // return true;
    }


    public collectFailedRequest(request): void {
        this.cachedRequests.push(request);
        this.router.navigate(['/login']);
    }
    public retryFailedRequests(): void {
        // retry the requests. this method can
        // be called after the token is refreshed
    }

    public getToken(): string {

        const tokens = localStorage.getItem('token');
        if (tokens != null) {
            let token = JSON.parse(tokens).token
            console.log(token);
            return token;
        }
        else {
            return "token ist null"
        }

    }

    isAdmin(){
        const tokens = localStorage.getItem('token');
        if (tokens != null) {
            if(JSON.parse(tokens).userDto.admin){
                return true;
            }else{
                return false;
            }
        }
        else {
            return false;
        }
    }

    logoutUser() {
        localStorage.removeItem('token');
    }
}
