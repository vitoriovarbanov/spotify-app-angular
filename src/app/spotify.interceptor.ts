import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { GlobalService } from './global.service';

@Injectable()
export class SpotifyInterceptor implements HttpInterceptor {
  clientId: string = 'cba0314e54f34815af7a43d3470fb4cb'
  redirectUri: string = 'http://localhost:4200/authorize'
  scope: string = 'user-read-private user-read-email user-top-read'
  authorized

  constructor(private router: Router, private gs: GlobalService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        'Authorization': `Bearer ${localStorage.getItem('bearerToken')}`
      }
    })

    return next.handle(request)
      .pipe(catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
            console.log(`Your session token has expired!`)
            localStorage.clear()
            this.gs.authorized$.next(false)
            this.router.navigate['']
        }

        return throwError(err)
      }))






  }
}
