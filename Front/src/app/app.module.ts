import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatMenuModule,
  MatCardModule, MatSnackBarModule, MatSelectModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { UserModule } from './shared/user.module';
import {ErrorHandler} from './utils/error-handlers';
import {RequestInterceptor} from './utils/http-interceptor';
import {TranslatePipe} from './translate/translate.pipe';
import {TRANSLATION_PROVIDERS} from './translate/translations';
import {TranslateService} from './translate/translate.service';
import {TranslateModule} from './translate/translate.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatSidenavModule,
    AppRoutingModule,
    MatSnackBarModule,
    MatSelectModule,
    TranslateModule,
    UserModule
  ],
  providers: [
    ErrorHandler,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
    TRANSLATION_PROVIDERS,
    TranslateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
