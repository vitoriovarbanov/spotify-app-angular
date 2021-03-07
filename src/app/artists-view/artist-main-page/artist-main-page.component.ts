import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-artist-main-page',
  templateUrl: './artist-main-page.component.html',
  styleUrls: ['./artist-main-page.component.css']
})
export class ArtistMainPageComponent implements OnInit {
  artistName: string;
  id: string;
  artistImg$;
  test$
  topTracksInfo;

  constructor(private news: NewsService, private router: ActivatedRoute,
    private spotifySrv: SpotifyService) { }

  ngOnInit(): void {
    this.router.params
      .subscribe(data=>{
        this.artistName = data['name']
        this.id = data['id']
      })
    this.test$ = this.news.getNewsForEachArtist(this.artistName)
    this.artistImg$ = this.spotifySrv.getArtistImg(this.id)
     this.topTracksInfo = this.spotifySrv.getArtistsTopTracks(this.id)
      //.subscribe(data=>console.log(data))
  }

}
