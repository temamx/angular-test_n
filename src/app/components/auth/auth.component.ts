import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/types/user.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public authForm: FormGroup;

  constructor(private _router: Router, private _auth: AuthService) {}

  ngOnInit(): void {
    this.authForm = new FormGroup({
      login: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  public logIn(user: IUser): void {
    this.authForm.disable();
    const { login, password } = user;
    const isAuth = this._auth.accounts.find(x => x.login === login && x.password === password);

    if (isAuth) {
      this._auth.isAuthenticated = true;
      this._router.navigate(['home']);
      this._auth.successLogin = login;
    } else {
      alert("Неверный логин или пароль");
      this.authForm.enable();
    }
  }
}
