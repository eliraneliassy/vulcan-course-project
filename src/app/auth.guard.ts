import { switchMap } from 'rxjs/operators';
import { AuthService } from './services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean | UrlTree> {

    return this.authService.getAuth().pipe(
      switchMap((user: string) => {
        if (user) {
          return of(true);
        }
        return of(this.router.parseUrl('/'));
      })
    );
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> {
    // return this.authService.getAuth().subscribe((user: string) => {
    //   return user ? of(true) : of(false);
    // });

    return of(true);

    return this.authService.getAuth().pipe(
      switchMap((user) => {
        if (user) {
          return of(true);
        }
        this.router.navigateByUrl('/');
        return of(false);
      })
    );
  }


}
