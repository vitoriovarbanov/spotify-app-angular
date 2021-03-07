import { Component, OnInit } from '@angular/core';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private gs: GlobalService) {
    const credits = localStorage.getItem('bearerToken')
    if(credits==="undefined" || !credits){
      this.gs.authorized$.next(false)
    }else{
      this.gs.authorized$.next(true)
    }
  }

  ngOnInit() { }
}
