import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../shared/models/user.model';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class LoginResources {

  constructor(
    private http: HttpClient
  ) {
  }
}
