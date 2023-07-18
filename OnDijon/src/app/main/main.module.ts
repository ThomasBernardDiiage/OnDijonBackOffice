import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children : [
      { path: 'home', loadChildren:() => import('./home/home.module').then(x => x.HomeModule)},
      { path: 'shelter', loadChildren: () => import('./shelter/shelter.module').then(x => x.ShelterModule)},
      { path: 'settings', loadChildren: () => import('./settings/settings.module').then(x => x.SettingsModule)},
      { path: 'logout', loadChildren: () => import('../authentication/authentication.module').then(x => x.AuthenticationModule)},
  ]},
]


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  bootstrap: [MainComponent]
})
export class MainModule { }
