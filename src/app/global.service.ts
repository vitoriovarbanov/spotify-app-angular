import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  authorized$ = new BehaviorSubject(null)

  constructor(private http: HttpClient) { }

  getUserPlaylists(){
    const token = localStorage.getItem('bearerToken')
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` })
    return this.http.get(`https://api.spotify.com/v1/me/playlists`, { headers: headers })
  }
}
