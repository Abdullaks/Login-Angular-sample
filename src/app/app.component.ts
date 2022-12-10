import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LoginPage';
  submitted = false;
  submittedSignup = false;
  hide = true;
  hideSignup = true;
  role = [
    { id: 1, name: 'manager' },
    { id: 2, name: 'hr' },
    { id: 3, name: 'ceo' },
    { id: 4, name: 'cto' },
    { id: 5, name: 'dev' },
    { id: 6, name: 'seniordev' },
    { id: 7, name: 'tester' }
  ];
  constructor(private fb: FormBuilder) {}

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  get AllControls() {
    return this.loginForm.controls;
  }

  onSubmit(values: any) {
    this.submitted = true;
    console.log(values);
  }
  signupForm = this.fb.group(
    {
      name: ['', Validators.required],
      age: [null, Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      date: ['', Validators.required],
      role: [null, Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required]
    },
    {
      validator: () => {
        if (
          this.signupForm?.controls['password'].value !=
          this.signupForm?.controls['confirmpassword'].value
        ) {
          console.log("fffffffffffffffff");
          
          this.signupForm?.controls['confirmpassword'].setErrors({
            paswordMismatch: true
          });
        }
      }
    }
  );

  get AllControlsSignup() {
    return this.signupForm.controls;
  }

  onSubmitSignup(values: any) {
    this.submittedSignup = true;
    console.log(values);
  }
}
