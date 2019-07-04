import {NgModule} from '@angular/core';
import {UserService} from './user.service';
import {UserResources} from './user.resources';

@NgModule({
  imports: [
  ],
  exports: [
  ],
  declarations: [
  ],
  providers: [
    UserService,
    UserResources
  ],
})

export class UserModule {
}
