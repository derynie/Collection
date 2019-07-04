import {Injectable} from '@angular/core';
import {RegisterResources} from './register.resources';

@Injectable()
export class RegisterService {

  constructor(private resources: RegisterResources) {
  }
}
