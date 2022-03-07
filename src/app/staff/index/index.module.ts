import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StaffPageRoutingModule } from './index-routing.module';

import { StaffPage } from './index.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StaffPageRoutingModule,
    SharedModule,
  ],
  declarations: [StaffPage],
})
export class StaffPageModule {}
