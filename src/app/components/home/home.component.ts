import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { IUser } from 'src/app/types/user.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public userLogin: string;
  public allUsers: IUser[];

  constructor(private _auth: AuthService) {}

  ngOnInit(): void {
    this.userLogin = this._auth.successLogin;
    this.allUsers = this._auth.accounts;
  }
}
