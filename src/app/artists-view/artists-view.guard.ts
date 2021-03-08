import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalService } from '../global.service';
import { take, skipWhile } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArtistsViewGuard implements CanLoad {
  constructor(private gs: GlobalService){

  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.gs.authorized$
      .pipe(
        skipWhile((value)=>{
          return value == null
        }),
        take(1)
      );
  }
}
