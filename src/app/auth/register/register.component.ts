import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = new FormGroup({
      email:
        new FormControl(null, { updateOn: 'blur', validators: [Validators.required, Validators.email] }),
      password:
        new FormControl(null, [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$')])
    });

    // this.form = this.formBuilder.group({
    //   email: this.formBuilder.control(null),
    //   password: this.formBuilder.control(null)
    // })

    this.form.controls.email.valueChanges.subscribe(console.log);
  }

  submit() {
    console.log(this.form);
  }

}
