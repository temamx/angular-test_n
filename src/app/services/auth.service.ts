import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { IUser } from '../types/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _router: Router) { }

  // setToken(token: string) {
  //   localStorage.setItem('token', token);
  // }

  // getToken() {
  //   return localStorage.getItem('token');
  // }

  // isLoggedIn() {
  //   return this.getToken() !== null;
  // }

  // login(user: IUser): Observable<string | boolean> {
  //   if (user.login === 'admin@gmail.com' && user.password === 'admin123'){
  //     this.setToken('alksflkgsklgjslkjffksdgjnsadgskmg')
  //     return of(true)
  //   }
  //   return throwError(() => new Error('Failed Login'))
  // }
}
