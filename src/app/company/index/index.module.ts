import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyPageRoutingModule } from './index-routing.module';

import { CompanyPage } from './index.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyPageRoutingModule,
    SharedModule,
  ],
  declarations: [CompanyPage],
})
export class CompanyPageModule {}
