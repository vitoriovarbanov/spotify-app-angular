import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { NewsService } from '../news.service';

@Injectable({
  providedIn: 'root'
})
export class SingleArtistNewsResolver implements Resolve<any> {
  constructor(private news: NewsService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const id = route.params['id']
    console.log(route.params)

    return this.news.getNewsForEachArtist()
  }
}
