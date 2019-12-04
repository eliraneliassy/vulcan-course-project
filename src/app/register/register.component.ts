import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      email:
        new FormControl(null, { updateOn: 'blur', validators: [Validators.required, Validators.email] }),
      password:
        new FormControl(null, [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$')])
    });

    this.form.controls.email.valueChanges.subscribe(console.log);
  }

  submit() {
    console.log(this.form);
  }

}
