import { selectUserName } from './../auth/auth.selectors';
import { State } from './../reducers/index';
import { AuthService } from './../services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  user: string;
  subscription: Subscription;

  constructor(
    private router: Router,
    private authService: AuthService,
    private store: Store<State>) { }

  ngOnInit() {
    this.subscription =
      this.authService.getAuth().subscribe((user: string) => {
        this.user = user;
      });


    // this.store.subscribe((state: State) => {
    //   this.user = state.auth.userName;
    // });

    this.store.select(selectUserName).subscribe((user: string) => {
      this.user = user;
    });
  }

  goToCart() {
    this.router.navigateByUrl('/cart');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
