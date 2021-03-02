import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizeComponent } from './authorize/authorize.component';
import { HomeViewComponent } from './home/home-view/home-view.component';

const routes: Routes = [
  {path: '', component: HomeViewComponent},
  {path: 'authorize', component: AuthorizeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
