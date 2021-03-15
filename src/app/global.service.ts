import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  authorized$ = new BehaviorSubject(null)

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    localStorage.setItem('newsApiKey', '72dafc068f3b4b1ca8c670ddcc5368ce')

  }

  currentUser() {
    return this.http.get(`https://api.spotify.com/v1/me`)
      .pipe(map((data) => {
        localStorage.setItem('email', data['email'])
        return data['display_name']
      }))
  }

  makeid(length) {
    if(!window.location.href.includes('authorize')){
      let randomString = '';
      let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        randomString += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      localStorage.setItem('randomString', randomString)
      return randomString;
    }
  }


}
