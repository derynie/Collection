import {NgModule} from '@angular/core';
import {routes} from './home.route';
import {HomeComponent} from './home.component';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '../translate/translate.module';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    TranslateModule
  ],
  exports: [
    HomeComponent
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
  ],
})

export class HomeModule {
  public static routes = routes;
}
