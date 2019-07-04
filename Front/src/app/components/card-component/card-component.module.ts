import {NgModule} from '@angular/core';
import { MatCardModule} from '@angular/material';
import {CardComponentComponent} from './card-component.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    MatCardModule,
    CommonModule
  ],
  exports: [
    CardComponentComponent
  ],
  declarations: [
    CardComponentComponent
  ],
  providers: [],
})

export class CardComponentModule {
}
