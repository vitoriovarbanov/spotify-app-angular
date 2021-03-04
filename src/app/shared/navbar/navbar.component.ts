import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  clientId: string = 'cba0314e54f34815af7a43d3470fb4cb'
  redirectUri: string = 'http://localhost:4200/authorize'

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

}
