import { Component } from '@angular/core';
import { AuthentificationService } from '../../../providers/authentification.service'
import { LoginRequest } from 'src/models/request/login.request.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authentificationService : AuthentificationService) { }

  email : String = ""
  password : String = ""


  login(){

    const body : LoginRequest = {
      email : this.email,
      password : this.password
    }

    this.authentificationService.login(body)
      .subscribe(response => {

      })
  }

}
