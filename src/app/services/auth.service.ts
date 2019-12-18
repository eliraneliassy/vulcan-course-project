import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Auth } from '../auth.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  constructor(private router: Router) { }

  getAuth(): Observable<string> {
    return this.user.asObservable();
  }

  private setAuth(user: string) {
    this.user.next(user);
  }

  login(user: string) {
    this.setAuth(user);
    this.router.navigateByUrl('/feed');
  }

  logout() {
    this.setAuth(null);
    this.router.navigateByUrl('/');
  }
}
