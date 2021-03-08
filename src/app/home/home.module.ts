import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeViewComponent } from './home-view/home-view.component';
import { FeaturedArtistsComponent } from './featured-artists/featured-artists.component';

@NgModule({
  declarations: [
    HomeViewComponent,
    FeaturedArtistsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [],
  exports: [
    HomeViewComponent
  ]
})
export class HomeModule { }
