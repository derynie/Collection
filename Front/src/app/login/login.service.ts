import { Injectable } from '@angular/core';
import { LoginResources } from './login.resources';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { User } from '../shared/models/user.model';
import {UserService} from '../shared/user.service';

@Injectable()
export class LoginService {

  constructor(private resources: LoginResources,
              private userService: UserService) {
  }

  public login(value: {email: string, password: string}): Promise<User> {

    return this.userService.login(value);
  }
}
