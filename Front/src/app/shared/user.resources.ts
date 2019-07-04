import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../shared/models/user.model';
import { catchError, map } from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class UserResources {

  constructor(
    private http: HttpClient,
    public snackbar: MatSnackBar
  ) {
  }

  public login(value: {email: string, password: string}): Observable<User> {
    const apiPath = 'http://localhost:3004/login';
    return this.http
      .post(apiPath, value)
      .pipe(map((response: any) => {
        if (response.code !== 200) {
          this.snackbar.open(response.message, 'close', { duration: 2000});
          throwError(response.message);
        }
        const user: User = User.New(response.user);
        return user;
      }), catchError((e) => {
        return throwError(e);
      }));
  }

  public register(value: {pseudo: string, email: string, password: string}): Observable<User> {
    const apiPath = 'http://localhost:3004/register';

    const body = {
      name: value.pseudo,
      email: value.email,
      password: value.password
    };

    return this.http
      .post(apiPath, body)
      .pipe(map((response: any) => {
        if (response.code !== 200) {
          if (response.message.indexOf('ER_DUP_ENTRY') >= 0) {
            this.snackbar.open('Email already use', 'close', { duration: 2000});
          } else {
            this.snackbar.open(response.message, 'close', { duration: 2000});
          }
          throwError(response.message);
        }
        const user: User = User.New(response.user);
        return user;
    }), catchError((e) => {
        return throwError(e);
      }));
  }
}
