import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router, RouterEvent, NavigationEnd } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { BehaviorSubject } from 'rxjs';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 /*  url = `https://api.spotify.com/v1/artists/?ids=2CIMQHirSU0MQqyYHq0eOx`
  query = `2CIMQHirSU0MQqyYHq0eOx` */
 /*  headers = new HttpHeaders({ 'Authorization': `Bearer ${this.bearer}` }) */
  constructor(private gs: GlobalService) {
    console.log(this.gs.authorized$.subscribe(data=>console.log(data)))
  }

  ngOnInit() {

    //this.authorized$.subscribe(data=>console.log(data))
    /* return this.http.get(`${this.url}`, { headers: this.headers })
      .subscribe(data => console.log(data)) */

  }
}
