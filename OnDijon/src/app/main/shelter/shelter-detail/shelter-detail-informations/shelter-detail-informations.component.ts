import { Component, Input } from '@angular/core';
import { Shelter } from 'src/models/shelter.interface';

@Component({
  selector: 'app-shelter-detail-informations',
  templateUrl: './shelter-detail-informations.component.html',
  styleUrls: ['./shelter-detail-informations.component.scss']
})
export class ShelterDetailInformationsComponent {

  @Input() shelter? : Shelter

}
