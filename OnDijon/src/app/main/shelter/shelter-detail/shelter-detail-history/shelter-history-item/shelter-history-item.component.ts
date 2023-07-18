import { Component, Input } from '@angular/core';
import { ShelterHistoryResponse } from 'src/models/response/shelterHistory.response.interface';

@Component({
  selector: 'app-shelter-history-item',
  templateUrl: './shelter-history-item.component.html',
  styleUrls: ['./shelter-history-item.component.scss']
})
export class ShelterHistoryItemComponent {

  @Input() item! : ShelterHistoryResponse
}
