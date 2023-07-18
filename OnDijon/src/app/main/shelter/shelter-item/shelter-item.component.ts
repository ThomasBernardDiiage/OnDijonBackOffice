import { Component, Input } from '@angular/core';
import { Shelter } from 'src/models/shelter.interface';

@Component({
  selector: 'app-shelter-item',
  templateUrl: './shelter-item.component.html',
  styleUrls: ['./shelter-item.component.scss']
})
export class ShelterItemComponent {

  @Input() shelter? : Shelter

}
