import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AnotherPagePage } from './another-page/another-page';
import { SharedComponent } from './shared/shared.component';
import { AuthenticationService } from './authentication.service';
import { NewPage } from './new-page/new-page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'new-page',
    component: NewPage,
    canActivate: [AuthenticationService], // Service that is needed to include to use authentication in page
  },
  {
    path: 'shared',
    component: SharedComponent,
  },
  {
    path: 'another-page',
    component: AnotherPagePage,
    canActivate: [AuthenticationService], // Service that is needed to include to use authentication in page
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
