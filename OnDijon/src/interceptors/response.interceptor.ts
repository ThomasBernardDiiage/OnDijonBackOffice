import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return next.handle(request).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
            const statusCode = event.status;
            let color = '';

            if (statusCode >= 200 && statusCode < 300) {
              // 2xx Success status code
              color = '#00B284';
            } else if (statusCode >= 400 && statusCode < 500) {
              // 4xx Client error status code
              color = '#fA8B45';
            } else if (statusCode >= 500 && statusCode < 600) {
              // 5xx Server error status code
              color = '#b2001e';
            }

            console.log(`%c${statusCode} :`, `color: ${color}`, event.url);
          }
        },
        (error) => {
          if (error instanceof HttpErrorResponse) {
            const statusCode = error.status;
            let color = '';

            if (statusCode >= 400 && statusCode < 500) {
              // 4xx Client error status code
              color = '#fA8B45';
            } else if (statusCode >= 500 && statusCode < 600) {
              // 5xx Server error status code
              color = '#b2001e';
            }

            console.log(`%c${statusCode} :`, `color: ${color}`, error.url);

          }
        }
      )
    );
  }
}
