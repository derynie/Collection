import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {UserResources} from './user.resources';
import {User} from './models/user.model';

@Injectable({ providedIn: 'root'})
export class UserService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;


  constructor(private resources: UserResources) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public login(value: {email: string, password: string}): Promise<User> {

    return this.resources.login(value)
      .pipe(map((result: User) => {
        localStorage.setItem('currentUser', JSON.stringify(result));
        this.currentUserSubject.next(result);

        return result;
      }), catchError((e) => {
        return throwError(e);
      })).toPromise();
  }

  public register(value: {pseudo: string, email: string, password: string}): Promise<User> {

    return this.resources.register(value)
      .pipe(map((result: User) => {
        localStorage.setItem('currentUser', JSON.stringify(result));
        this.currentUserSubject.next(result);

        return result;
      }), catchError((e) => {
        return throwError(e);
      })).toPromise();
  }

  public logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
