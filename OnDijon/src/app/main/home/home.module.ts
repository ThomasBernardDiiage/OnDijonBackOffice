import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LottieModule } from 'ngx-lottie';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    LottieModule,
    RouterModule.forChild(routes)
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
