import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RegisterResources {

  constructor(
    private http: HttpClient
  ) {
  }
}
