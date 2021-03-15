import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.css']
})
export class AuthorizeComponent implements OnInit {
  showNotification = false;
  constructor(private router: Router, private globalService: GlobalService) {
    var hash_array = location.hash.substring(1).split('&');
    var hash_key_val = new Array(hash_array.length);
    for (var i = 0; i < hash_array.length; i++) {
      hash_key_val[i] = hash_array[i].split('=');
    }
    let stringArr = hash_array[3].split('=')
    let credentialsArr = hash_array[0].split('=')
    let bearer = credentialsArr[1]
    let recievedState = stringArr[1]
    const string = localStorage.getItem('randomString')
    //window.history.pushState("", "", '/authorize')
    if (recievedState === string) {
      localStorage.setItem('bearerToken', bearer)
      this.globalService.authorized$.next(true)
      this.router.navigate([''])
    } else {
      this.showNotification = true;
      this.globalService.authorized$.next(false)
    }

  }

  ngOnInit(): void { }

  refresh(){
    this.router.navigate([''])
    setTimeout(()=>{
      window.location.reload();
    },1000)

  }

}
