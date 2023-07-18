import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LottieModule } from 'ngx-lottie';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';

@NgModule({
  declarations: [
    MapComponent,
    PrimaryButtonComponent,
    NotFoundComponent,
    ExpansionPanelComponent
  ],
  imports: [
    CommonModule,
    LottieModule
  ],
  exports : [
    MapComponent,
    PrimaryButtonComponent,
    ExpansionPanelComponent
  ]
})
export class SharedModule { }
