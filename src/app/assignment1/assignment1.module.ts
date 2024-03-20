import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Assignment1PageRoutingModule } from './assignment1-routing.module';

import { Assignment1Page } from './assignment1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Assignment1PageRoutingModule
  ],
  declarations: [Assignment1Page]
})
export class Assignment1PageModule {}
