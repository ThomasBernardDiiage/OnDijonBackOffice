import { Component, Input } from '@angular/core';
import { Shelter } from 'src/models/shelter.interface';

@Component({
  selector: 'app-shelter-detail-history',
  templateUrl: './shelter-detail-history.component.html',
  styleUrls: ['./shelter-detail-history.component.scss']
})
export class ShelterDetailHistoryComponent {

  @Input() shelter? : Shelter

}
