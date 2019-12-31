import { State } from './../../reducers/index';
import { AuthService } from './../../services/auth.service';

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UserLogin } from '../auth.actions';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private store: Store<State>) { }

  ngOnInit() {
    this.store.subscribe(console.log);
  }

  submit(form: NgForm) {
    // this.authService.login(form.value.email);
    this.store.dispatch(new UserLogin(form.value.email));
  }

}
