import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyCreatePageRoutingModule } from './company-create-routing.module';

import { CompanyCreatePage } from './company-create.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CompanyCreatePageRoutingModule,
    SharedModule,
  ],
  declarations: [CompanyCreatePage],
})
export class CompanyCreatePageModule {}
