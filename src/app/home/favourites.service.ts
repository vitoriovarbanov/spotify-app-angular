import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  constructor(private http: HttpClient) { }

  getUserFavouriteArtists(){
    const token = localStorage.getItem('bearerToken')
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` })
    return this.http.get(`https://api.spotify.com/v1/me/top/artists`) //, { headers: headers}
       .pipe(map((data)=>{
         return data['items']
      }))
  }

  test(){
    return this.http.get(`https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg`) //, { headers: headers}
  }

}
