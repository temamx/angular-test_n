import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
