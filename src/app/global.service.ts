import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  authorized$ = new BehaviorSubject(null)

  constructor(private http: HttpClient) {
    localStorage.setItem('newsApiKey', '72dafc068f3b4b1ca8c670ddcc5368ce')
  }

  getUserPlaylists(){
    const token = localStorage.getItem('bearerToken')
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` })
    return this.http.get(`https://api.spotify.com/v1/me/playlists`, { headers: headers })
  }
}
