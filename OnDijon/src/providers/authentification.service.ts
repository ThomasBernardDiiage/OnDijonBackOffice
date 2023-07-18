import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { LoginRequest } from 'src/models/request/login.request.interface';
import { LoginResponse } from 'src/models/response/login.response.interface';

@Injectable({
    providedIn: 'root'
  })
export class AuthentificationService {

    constructor(private httpClient : HttpClient){ }

    login (body : LoginRequest) : Observable<LoginResponse> {
        return this.httpClient.post<LoginResponse>(`${environment.apiUrl}login`, body)
    }
}