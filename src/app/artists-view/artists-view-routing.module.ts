import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistMainPageComponent } from './artist-main-page/artist-main-page.component';

const routes: Routes = [
  { path: ':id', component: ArtistMainPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistsViewRoutingModule { }
