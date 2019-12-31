import { Item } from './shared/item.interface';
import { CartService } from './services/cart.service';
import { switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsInCartGuard implements CanActivate {

  constructor(
    private cartService: CartService,
    private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.cartService.getCart().pipe(
      switchMap((cart: Item[]) => {
        if (cart && cart.length > 0) {
          return of(true);
        }
        return of(this.router.parseUrl('/feed'));

      })
    );

  }

}
