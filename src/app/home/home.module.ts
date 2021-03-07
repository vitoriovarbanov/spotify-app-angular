import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeViewComponent } from './home-view/home-view.component';

@NgModule({
  declarations: [
    HomeViewComponent
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
