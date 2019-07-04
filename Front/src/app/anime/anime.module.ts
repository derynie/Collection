import { AnimeComponent } from './anime.component';
import { NgModule } from '@angular/core';
import { AnimeService } from './anime.service';
import { AnimeResources } from './anime.resources';
import { routes } from './anime.route';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatIconModule, MatGridListModule} from '@angular/material';
import {CardComponentModule} from '../components/card-component/card-component.module';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import {TranslateModule} from '../translate/translate.module';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatCardModule,
    TranslateModule,
    MatGridListModule,
    CardComponentModule
  ],
  exports: [
    AnimeComponent
  ],
  declarations: [
    AnimeComponent
  ],
  providers: [
    AnimeService,
    AnimeResources
  ],
})

export class AnimeModule {
  public static routes = routes;
}
