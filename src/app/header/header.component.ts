import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: string;

  constructor(
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    this.authService.getAuth().subscribe((user: string) => {
      this.user = user;
    });
  }

  goToCart() {
    this.router.navigateByUrl('/cart');
  }

}
