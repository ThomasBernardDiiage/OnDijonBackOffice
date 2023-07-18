import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { SharedModule } from '../shared/shared.module';
import { LottieModule } from 'ngx-lottie';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children : [
      { path: '', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ]
  },
]

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    LottieModule,
    FormsModule
  ]
})
export class AuthenticationModule { }
