import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizeComponent } from './authorize/authorize.component';
import { HomeViewComponent } from './home/home-view/home-view.component';

const routes: Routes = [
  { path: 'authorize', component: AuthorizeComponent },
  { path: 'artists', loadChildren: () => import('./artists-view/artists-view.module').then(m => m.ArtistsViewModule)},
  { path: '', pathMatch: 'full', component: HomeViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
