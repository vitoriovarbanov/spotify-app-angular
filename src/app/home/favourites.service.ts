import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { GlobalService } from '../global.service';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  constructor(private http: HttpClient, private gs: GlobalService) { }

  getUserFavouriteArtists() {
      return this.http.get(`https://api.spotify.com/v1/me/following?type=artist`)
        .pipe(map((data) => {
          data = Object.values(data)
          return data[0]['items']
        }))
  }
}
