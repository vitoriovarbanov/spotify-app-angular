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
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { GlobalService } from './global.service';

@Injectable()
export class SpotifyInterceptor implements HttpInterceptor {
  clientId: string = 'cba0314e54f34815af7a43d3470fb4cb'
  redirectUri: string = 'http://localhost:4200/authorize'
  scope: string = 'user-read-private user-read-email user-top-read user-follow-read user-follow-modify'
  authorized

  constructor(private router: Router, private gs: GlobalService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.url.includes('newsapi.org')){
      request = request.clone({
        setHeaders: {
          'Authorization': `${localStorage.getItem('newsApiKey')}`
        }
      })
    }else{
      request = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${localStorage.getItem('bearerToken')}`
        }
      })
    }


    return next.handle(request)
      .pipe(catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
            console.log(`Your session token has expired!`)
            // localStorage.clear()
            this.gs.authorized$.next(false)
            this.router.navigate['']
            const append = document.createElement('button')
            append.className = 'ui negative basic button'
            append.innerText = 'Your session token has expired! Please, log in again!'
            document.body.appendChild(append)
            setTimeout(()=>{
              append.remove()
            },4000)
        }
        return throwError(err)
      }))


  }
}
