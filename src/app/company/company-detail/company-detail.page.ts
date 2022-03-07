import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CompanyService } from '../../shared/services/company/company.service';
import { Company } from '../../shared/models/company.model';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.page.html',
  styleUrls: ['./company-detail.page.scss'],
})
export class CompanyDetailPage implements OnInit {
  companyForm: FormGroup;
  company: Company;
  companyId: string;

  constructor(
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.companyForm = new FormGroup({
      name: new FormControl(),
      code: new FormControl(),
      description: new FormControl(),
    });
    this.getCompanyDetail();
  }

  getCompanyDetail() {
    this.companyId = this.route.snapshot.paramMap.get('id');
    this.companyService.getSpecificCompany(this.companyId).subscribe((res) => {
      this.companyForm = new FormGroup({
        name: new FormControl(res.name),
        code: new FormControl(res.code),
        description: new FormControl(res.description),
      });
      this.company = res;
    });
  }

  updateCompany() {
    this.companyService
      .updateCompany(
        this.companyId,
        this.companyForm.value.name,
        this.companyForm.value.code,
        this.companyForm.value.description
      )
      .subscribe(() => {
        this.router.navigate(['/company']);
        this.updateCompanyToaster();
      });
  }

  async updateCompanyToaster() {
    const toast = await this.toastCtrl.create({
      message: 'Company Info Updated',
      color: 'success',
      duration: 2000,
    });
    toast.present();
  }
}
