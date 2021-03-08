import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizeComponent } from './authorize/authorize.component';
import { HomeViewComponent } from './home/home-view/home-view.component';
import { ArtistsViewGuard } from './artists-view/artists-view.guard'

const routes: Routes = [
  { path: 'authorize', component: AuthorizeComponent },
  { path: 'artists', canLoad: [ArtistsViewGuard], loadChildren: () => import('./artists-view/artists-view.module').then(m => m.ArtistsViewModule)},
  { path: '**', redirectTo: '', component: HomeViewComponent },
  { path: '', pathMatch: 'full', component: HomeViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
