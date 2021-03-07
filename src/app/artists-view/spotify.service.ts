import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }


  getArtistImg(id){
    return this.http.get(`https://api.spotify.com/v1/artists/${id}`)
      .pipe(map((data)=>{
        return data['images'][0]['url']
      }))
  }

  getArtistsTopTracks(id){
    return this.http.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=BG`)
      .pipe(map((data)=>{
         data = Object.values(data)
         return data[0].slice(0,5)
      }))
  }

}

