import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StaffCreatePageRoutingModule } from './staff-create-routing.module';

import { StaffCreatePage } from './staff-create.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    StaffCreatePageRoutingModule,
    SharedModule,
  ],
  declarations: [StaffCreatePage],
})
export class StaffCreatePageModule {}
