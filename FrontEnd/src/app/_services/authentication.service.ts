import { Injectable } from '@angular/core';
import { User } from '../_model/user';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
// import * as jwtDecode from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    endpoint: string = 'http://localhost:4000/api';
    headers = new HttpHeaders().set('Content-Type', 'application/json');
    currentUser = {};
    redirectUrl: string;
    
    constructor(
        private http: HttpClient,
        public router: Router
    ) { }
    
    register(user: User): Observable<any> {
        let api = `${this.endpoint}/register-user`;
        return this.http.post(api, user)
            .pipe(
                catchError(this.handleError)
            )
    }

    login(email: string, password: string) {
        return this.http.post<any>(`${this.endpoint}/signin`, { email: email, password: password })
            .subscribe((res: any) => {
                localStorage.setItem('access_token', res.token);
                localStorage.setItem('user_id', res._id);

                this.getUserProfile(res._id).subscribe((res) => {
                    this.currentUser = res;
                    localStorage.setItem('user', JSON.stringify(res));
                    this.router.navigate(['profile/' + res.msg._id]);
                })
            })
    }

    
    get isLoggedIn(): boolean {
        let authToken = this.getToken();
        return (authToken !== null) ? true : false;
    }

    getUserProfile(id): Observable<any> {
        let api = `${this.endpoint}/user-profile/${id}`;
        return this.http.get(api, { headers: this.headers }).pipe(
            map((res: Response) => {
                return res || {}
            }),
            catchError(this.handleError)
        )
    }
    
    logout() {
        let removeToken = localStorage.removeItem('access_token');
        if (removeToken == null) {
            this.router.navigate(['log-in']);
        }
    }

    //get data from localStorage
    getToken() {
        return localStorage.getItem('access_token');
    }

    getUser(){
        return JSON.parse(localStorage.getItem('user'));
    }


    // Error 
    handleError(error: HttpErrorResponse) {
        let msg = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            msg = error.error.message;
        } else {
            // server-side error
            msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(msg);
    }
}