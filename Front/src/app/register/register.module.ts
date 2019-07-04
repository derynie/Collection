import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './register.route';
import { CommonModule } from '@angular/common';
import {RegisterComponent} from './register.component';
import {RegisterService} from './register.service';
import {RegisterResources} from './register.resources';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilsModule } from '../utils/utils.module';
import {UserModule} from '../shared/user.module';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    UtilsModule,
    UserModule
  ],
  exports: [
    RegisterComponent
  ],
  declarations: [
    RegisterComponent
  ],
  providers: [
    RegisterService,
    RegisterResources
  ],
})

export class RegisterModule {
  public static routes = routes;
}
