import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home#HomeModule' },
  { path: 'animes', loadChildren: './anime#AnimeModule' },
  { path: 'login', loadChildren: './login#LoginModule' },
  { path: 'register', loadChildren: './register#RegisterModule' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
