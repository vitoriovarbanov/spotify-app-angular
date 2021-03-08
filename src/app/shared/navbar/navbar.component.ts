import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  clientId: string = 'cba0314e54f34815af7a43d3470fb4cb'
  redirectUri: string = 'http://localhost:4200/authorize'
  scope: string = 'user-read-private user-read-email user-top-read user-follow-read user-follow-modify'
  authorized$

  constructor(public gs: GlobalService) {
    this.gs.authorized$.subscribe(data=>{
      this.authorized$ = data;
    })
  }

  ngOnInit(): void { }

  logOutUser(){
    this.gs.authorized$.next(false)
    localStorage.removeItem('bearerToken')
    localStorage.removeItem('email')
  }

}
