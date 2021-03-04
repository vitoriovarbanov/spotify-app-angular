import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.css']
})
export class AuthorizeComponent implements OnInit {
  constructor(private router: Router, private globalService: GlobalService) {
    var hash_array = location.hash.substring(1).split('&');
    var hash_key_val = new Array(hash_array.length);
    for (var i = 0; i < hash_array.length; i++) {
      hash_key_val[i] = hash_array[i].split('=');
    }
    let credentialsArr = hash_array[0].split('=')
    let bearer = credentialsArr[1]
    localStorage.setItem('bearerToken', bearer)
    window.history.pushState("", "", '/authorize')
    if (bearer === undefined) {
      this.globalService.authorized$.next(false)
    }else{
      this.globalService.authorized$.next(true)
    }
    this.router.navigate([''])
  }

  ngOnInit(): void {}

}
