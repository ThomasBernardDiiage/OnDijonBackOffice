import { Component, Input, OnInit } from '@angular/core';
import { ShelterReport } from 'src/models/shelterReport.interface';

@Component({
  selector: 'app-shelter-detail-status',
  templateUrl: './shelter-detail-status.component.html',
  styleUrls: ['./shelter-detail-status.component.scss']
})
export class ShelterDetailStatusComponent implements OnInit {

  @Input() reports? : ShelterReport[]
  reportsWrapper? : ShelterReportWrapper[]

  ngOnInit(): void {
    this.reportsWrapper = this.reports?.map(report => ({
      ...report,
      expanded: false
    }));
  }

}


interface ShelterReportWrapper extends ShelterReport {
  expanded: Boolean;
}
