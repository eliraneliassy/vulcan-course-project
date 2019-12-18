import { AuthService } from './../services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

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
    private authService: AuthService) { }

  ngOnInit() {
    this.subscription =
      this.authService.getAuth().subscribe((user: string) => {
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
