import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  authorized$ = new BehaviorSubject(null)

  constructor(private http: HttpClient) {
    localStorage.setItem('newsApiKey', '72dafc068f3b4b1ca8c670ddcc5368ce')
  }

  currentUser(){
    return this.http.get(`https://api.spotify.com/v1/me`)
      .pipe(map((data)=>{
        localStorage.setItem('email', data['email'])
        return data['display_name']
      }))
  }
}
