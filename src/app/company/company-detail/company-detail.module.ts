import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyDetailPageRoutingModule } from './company-detail-routing.module';

import { CompanyDetailPage } from './company-detail.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CompanyDetailPageRoutingModule,
    SharedModule,
  ],
  declarations: [CompanyDetailPage],
})
export class CompanyDetailPageModule {}
