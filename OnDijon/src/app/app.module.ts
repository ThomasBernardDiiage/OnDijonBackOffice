import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainModule } from './main/main.module';
import { SharedModule } from './shared/shared.module';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { RequestInterceptor } from '../interceptors/request.interceptor';
import { ResponseInterceptor } from 'src/interceptors/response.interceptor';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MainModule,
    SharedModule,
    HttpClientModule,
    LottieModule.forRoot({ player: playerFactory }),
    FormsModule
  ],
  exports : [
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : RequestInterceptor,
      multi : true
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass : ResponseInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function playerFactory() {
  return player;
}