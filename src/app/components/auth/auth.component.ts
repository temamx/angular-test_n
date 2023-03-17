import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;

  constructor(private _auth: AuthService){}

  ngOnInit(): void {
    this.authForm = new FormGroup({
      login: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  // onSubmit() {
  //   this.authForm.disable()
  //   this._auth.login(this.authForm.value).subscribe({
  //     next: () => {console.log('Login success')},
  //     error: (error) => console.warn(error)
  //   })
  // }
}
