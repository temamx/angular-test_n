import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private _router: Router, private _auth: AuthService){}

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      login: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  public signUp(): void {
    this.signUpForm.disable();
    this._auth.accounts.push(this.signUpForm.value);
    this._router.navigate(['auth']);
  }
}
