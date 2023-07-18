import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShelterResponse} from '../models/response/shelter.response.interface'
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
  })
export class ShelterService {

    constructor(private httpClient : HttpClient){ }

    getShelters () : Observable<ShelterResponse[]> {
        return this.httpClient.get<ShelterResponse[]>(`${environment.apiUrl}shelters`)
    }

    getShelter(id : Number) : Observable<ShelterResponse> {
        return this.httpClient.get<ShelterResponse>(`${environment.apiUrl}shelters/${id}?includes=history,reports`)
    }
}