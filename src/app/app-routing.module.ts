import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ActivityPagePage } from './activity-page/activity-page.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'activity-page',
    pathMatch: 'full'
  },
  {
    path: 'activity-page',
    loadChildren: () => import('./activity-page/activity-page.module').then( m => m.ActivityPagePageModule)
  },
  {
    path: 'activity-page',
    component: ActivityPagePage,
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
