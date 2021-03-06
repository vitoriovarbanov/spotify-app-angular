import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthorizeComponent } from './authorize/authorize.component'
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { SpotifyInterceptor } from './spotify.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    SharedModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: SpotifyInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
