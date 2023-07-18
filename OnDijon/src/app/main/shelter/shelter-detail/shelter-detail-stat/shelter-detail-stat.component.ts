import { Component, Input, OnInit } from '@angular/core';
import { Shelter } from 'src/models/shelter.interface';

@Component({
  selector: 'app-shelter-detail-stat',
  templateUrl: './shelter-detail-stat.component.html',
  styleUrls: ['./shelter-detail-stat.component.scss']
})
export class ShelterDetailStatComponent implements OnInit {

  @Input() shelter? : Shelter
  entries : Number = 0
  exits : Number = 0

  ngOnInit(): void {
    this.entries = this.shelter?.history.filter(x => x.isEntry).length ?? 0
    this.exits = this.shelter?.history.filter(x => !x.isEntry).length ?? 0
  }

}
