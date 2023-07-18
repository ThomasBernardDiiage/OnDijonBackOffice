import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./authentication/authentication.module').then(x => x.AuthenticationModule)},
  { path: 'main', loadChildren: () => import('./main/main.module').then(x => x.MainModule)},
  { path : '**', component : NotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
