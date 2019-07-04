import { NgModule } from '@angular/core';
import { ControlMessagesComponent } from './control-messages.component';
import { ValidationService } from './validation.service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ControlMessagesComponent
  ],
  declarations: [
    ControlMessagesComponent
  ],
  providers: [
    ValidationService
  ],
})

export class UtilsModule {
}
