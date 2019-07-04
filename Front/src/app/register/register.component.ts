import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import {User} from '../shared/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html'
})

export class RegisterComponent {

  hide: Boolean = true;
  userForm: FormGroup;

  constructor(private userService: UserService,
              private formBuilder: FormBuilder,
              private router: Router) {
    this.userForm = this.formBuilder.group({
      'pseudo': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  public registerUser() {

    this.userService.register(this.userForm.value)
      .then(((user: User) => {
        if (user !== null) {
          this.router.navigate(['/home']);
        }
      }));
  }
}
