import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NewUser } from './../user/user.model';
import { Credentials } from './../user/credentials.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public http: HttpClient, public router: Router) {}

  public isAuthenticated(): boolean {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    return isAuthenticated === 'true';
  }

  public login(credentials: Credentials): Observable<any> {
    // We're using the spread syntax to get the
    // individual properties off the supplied user
    // object onto a new object
    return this.http.post(`/api/authenticate`, { ...credentials });
  }

  public setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public signup(user: NewUser): Observable<any> {
    // We're using the spread syntax to get the
    // individual properties off the supplied user
    // object onto a new object
    return this.http.post(`/api/users`, { ...user });
  }

  // public logout(): Observable<any> {
  //   return this.http.post('/api/logout', {});
  // }

  public logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
