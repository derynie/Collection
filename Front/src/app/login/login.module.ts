import { NgModule } from '@angular/core';
import { routes } from './login.route';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { LoginResources } from './login.resources';
import { RouterModule } from '@angular/router';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UtilsModule } from '../utils/utils.module';

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
    UtilsModule
  ],
  exports: [
    LoginComponent
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    LoginService,
    LoginResources
  ],
})

export class LoginModule {
  public static routes = routes;
}
