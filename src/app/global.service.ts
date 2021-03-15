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
  encodedString: string;

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
    if (!window.location.href.includes('authorize')) {
      var charset = '0123456789ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz-._'
      let result = ''

      while (length > 0) {
        var bytes = new Uint8Array(16);
        var random = window.crypto.getRandomValues(bytes);

        random.forEach(function (c) {
          if (length == 0) {
            return;
          }
          if (c < charset.length) {
            result += charset[c];
            length--;
          }
        });
      }
      // Encode the String
      localStorage.setItem('randomString', result)
      //hello
      this.encodedString = btoa(result);
      //lalalala
      //localStorage.setItem('randomString', encodedStringBtoA)
      return result;
    }
  }
}
