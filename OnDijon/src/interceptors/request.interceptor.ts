import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler) : Observable<HttpEvent<unknown>> {
      
      const token : String = localStorage.getItem('token') ?? "";
      const cloned = request.clone({headers: request.headers.set('Authorization', 'Bearer ' + token)})
      console.log(`%c${cloned.method} ${cloned.url}`, 'color: #00B284;');
      
  
      return next.handle(cloned);
  }
}