import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Assignment1Page } from './assignment1.page';

const routes: Routes = [
  {
    path: '',
    component: Assignment1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Assignment1PageRoutingModule {}
