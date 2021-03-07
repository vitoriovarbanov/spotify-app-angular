import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistsViewRoutingModule } from './artists-view-routing.module';
import { ArtistMainPageComponent } from './artist-main-page/artist-main-page.component';


@NgModule({
  declarations: [ArtistMainPageComponent],
  imports: [
    CommonModule,
    ArtistsViewRoutingModule
  ]
})
export class ArtistsViewModule { }
