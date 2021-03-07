import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { FavouritesService } from '../favourites.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {
  authorized
  favouriteArtists

  constructor(private gs: GlobalService, private fav: FavouritesService, private router: Router) {
    this.gs.authorized$.subscribe(data=>{
      this.authorized = data;
    })
  }

  ngOnInit(): void {
    if(this.authorized=== true){
      this.fav.getUserFavouriteArtists()
      .subscribe(data=>{
        this.favouriteArtists = data
        console.log(this.favouriteArtists)
      })
    }
  }

}
