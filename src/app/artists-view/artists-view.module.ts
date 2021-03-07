import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistsViewRoutingModule } from './artists-view-routing.module';
import { ArtistMainPageComponent } from './artist-main-page/artist-main-page.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ArtistMainPageComponent],
  imports: [
    CommonModule,
    ArtistsViewRoutingModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: []
})
export class ArtistsViewModule { }
