import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pin } from 'src/models/pin.interface';
import { ShelterService } from 'src/providers/shelter.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { ShelterResponse } from 'src/models/response/shelter.response.interface';

@Component({
  selector: 'app-shelter-detail',
  templateUrl: './shelter-detail.component.html',
  styleUrls: ['./shelter-detail.component.scss']
})
export class ShelterDetailComponent implements OnInit {

  id : Number = 0

  shelter! : ShelterResponse


  pin$ = new BehaviorSubject<Pin | undefined>(undefined)

  constructor(route: ActivatedRoute, private shelterService : ShelterService){
    const routeParams = route.snapshot.paramMap;
    this.id = + routeParams.get("id")!!
  }

  ngOnInit(): void {
    this.shelterService.getShelter(this.id).subscribe(response => {
      this.shelter = response

      this.pin$?.next({
        latitude : response.latitude,
        longitude : response.longitude,
        popupContent : `<h4>${response.name}<h4>`
      })
    })
  }
}
