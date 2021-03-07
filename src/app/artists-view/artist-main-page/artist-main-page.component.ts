import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-artist-main-page',
  templateUrl: './artist-main-page.component.html',
  styleUrls: ['./artist-main-page.component.css']
})
export class ArtistMainPageComponent implements OnInit {

  constructor(private news: NewsService) { }

  ngOnInit(): void {
    this.news.getNewsForEachArtist()
      .subscribe(data=>console.log(data))
  }

}
