import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CompanyService } from '../../shared/services/company/company.service';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.page.html',
  styleUrls: ['./company-create.page.scss'],
})
export class CompanyCreatePage implements OnInit {
  companyForm: FormGroup;

  constructor(
    private companyService: CompanyService,
    private router: Router,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.companyForm = new FormGroup({
      name: new FormControl(),
      code: new FormControl(),
      description: new FormControl(),
    });
  }

  createCompany() {
    this.companyService
      .createCompany(
        this.companyForm.value.name,
        this.companyForm.value.code,
        this.companyForm.value.description
      )
      .subscribe(() => {
        this.router.navigate(['/company']);
        this.createCompanyToaster();
      });
  }

  async createCompanyToaster() {
    const toast = await this.toastCtrl.create({
      message: 'Company Created',
      color: 'success',
      duration: 2000,
    });
    toast.present();
  }
}
