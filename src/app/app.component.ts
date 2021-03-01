import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router, RouterEvent, NavigationEnd } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  url = `https://api.spotify.com/v1/artists/?ids=2CIMQHirSU0MQqyYHq0eOx`
  query = `2CIMQHirSU0MQqyYHq0eOx`
  headers = new HttpHeaders({ 'Authorization': `Bearer BQD2lXfH-dPDvmlgPSeLRCAsjUQgvCFs6sAam9YVagaOgci1oAiiJGyd68BAr7gbOpzN4pvcWsYTZsUEcjGk_Zjvn0H1P5OQLTz7OdJDlniSN1vVRHMtjpIrl9k6nYSGdMJ3APECdWr0Bl19k7-xglAaICudycMounA` })
  test
  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {
    var hash_array = location.hash.substring(1).split('&');
    var hash_key_val = new Array(hash_array.length);

    for (var i = 0; i < hash_array.length; i++) {
      hash_key_val[i] = hash_array[i].split('=');
    }

    console.log(hash_array[0].split('='))
  }

  ngOnInit() {
    return this.http.get(`${this.url}`, { headers: this.headers })
      .subscribe(data => console.log(data))

  }

}
