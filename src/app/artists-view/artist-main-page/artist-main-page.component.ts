import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist-main-page',
  templateUrl: './artist-main-page.component.html',
  styleUrls: ['./artist-main-page.component.css']
})
export class ArtistMainPageComponent implements OnInit {
  artistName: string;
  test$

  constructor(private news: NewsService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params
      .subscribe(data=>{
        this.artistName = data['name']
      })

    this.test$ = this.news.getNewsForEachArtist(this.artistName)

    console.log(this.test$)
  }

}
