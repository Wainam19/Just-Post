import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StaffDetailPageRoutingModule } from './staff-detail-routing.module';

import { StaffDetailPage } from './staff-detail.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    StaffDetailPageRoutingModule,
    SharedModule,
  ],
  declarations: [StaffDetailPage],
})
export class StaffDetailPageModule {}
