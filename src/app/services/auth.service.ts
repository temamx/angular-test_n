import { Injectable } from '@angular/core';
import { IUser } from '../types/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public successLogin: string;
  public isAuthenticated: boolean;
  public accounts: IUser[] = [
    {
      login: "temamx",
      password: "123456"
    },
    {
      login: "carla",
      password: "110011"
    },
    {
      login: "elliot",
      password: "1234567"
    },
    {
      login: "cox",
      password: "marina3000"
    },
    {
      login: "bobKelso",
      password: "112233"
    },
    {
      login: "johnDorian",
      password: "john2001"
    },
    {
      login: "chrisTurk",
      password: "chris1990"
    }
  ];

  constructor() {
    this.isAuthenticated = false;
  }
}
