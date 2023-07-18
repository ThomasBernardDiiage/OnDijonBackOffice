import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShelterComponent } from './shelter.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShelterItemComponent } from './shelter-item/shelter-item.component';
import { ShelterDetailComponent } from './shelter-detail/shelter-detail.component';
import { ShelterHistoryItemComponent } from './shelter-detail/shelter-detail-history/shelter-history-item/shelter-history-item.component';
import { LottieModule } from 'ngx-lottie';
import { ShelterDetailInformationsComponent } from './shelter-detail/shelter-detail-informations/shelter-detail-informations.component';
import { ShelterDetailStatusComponent } from './shelter-detail/shelter-detail-status/shelter-detail-status.component';
import { ShelterDetailHistoryComponent } from './shelter-detail/shelter-detail-history/shelter-detail-history.component';
import { ShelterDetailStatComponent } from './shelter-detail/shelter-detail-stat/shelter-detail-stat.component';

const routes: Routes = [
  { path: '', component : ShelterComponent},
  { path: ':id', component : ShelterDetailComponent},

]

@NgModule({
  declarations: [
    ShelterComponent,
    ShelterItemComponent,
    ShelterDetailComponent,
    ShelterHistoryItemComponent,
    ShelterDetailInformationsComponent,
    ShelterDetailStatusComponent,
    ShelterDetailHistoryComponent,
    ShelterDetailStatComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    LottieModule
  ]
})
export class ShelterModule { }
