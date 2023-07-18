import { Component, OnInit } from '@angular/core';
import { Pin } from 'src/models/pin.interface';
import { Shelter } from 'src/models/shelter.interface';
import { ShelterService } from 'src/providers/shelter.service';
import { BehaviorSubject } from 'rxjs';
import { ShelterResponse } from 'src/models/response/shelter.response.interface';

@Component({
  selector: 'app-shelter',
  templateUrl: './shelter.component.html',
  styleUrls: ['./shelter.component.scss']
})
export class ShelterComponent implements OnInit {

  constructor(private shelterService : ShelterService){ }

  shelters : ShelterResponse[] = []
  pins$ = new BehaviorSubject<Pin[]>([])

  ngOnInit(): void {

    this.shelterService.getShelters().subscribe(sheltersResponse => {

      this.shelters = sheltersResponse


      this.pins$.next(sheltersResponse.map<Pin>(shelter => ({
        latitude : shelter.latitude,
        longitude : shelter.longitude,
        popupContent : `<h4>${shelter.name} ${shelter.occupation}/${shelter.capacity}<h4>`
      })))
    })
  }

}
