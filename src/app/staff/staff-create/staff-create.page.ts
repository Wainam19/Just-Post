import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CompanyService } from '../../shared/services/company/company.service';
import { StaffService } from '../../shared/services/staff/staff.service';

@Component({
  selector: 'app-staff-create',
  templateUrl: './staff-create.page.html',
  styleUrls: ['./staff-create.page.scss'],
})
export class StaffCreatePage implements OnInit {
  staffForm: FormGroup;
  company: any = [];

  constructor(
    private staffService: StaffService,
    private router: Router,
    private companyService: CompanyService,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.staffForm = new FormGroup({
      staffID: new FormControl(),
      name: new FormControl(),
      gender: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      company: new FormControl(),
    });
    this.getCompany();
  }

  getCompany() {
    this.companyService.getCompanyList().subscribe((res) => {
      this.company = res;
    });
  }

  createStaff() {
    this.staffService
      .createStaff(
        this.staffForm.value.staffID,
        this.staffForm.value.name,
        this.staffForm.value.gender,
        this.staffForm.value.email,
        this.staffForm.value.phone,
        this.staffForm.value.company
      )
      .subscribe(() => {
        this.router.navigate(['/staff']);
        this.createStaffToaster();
      });
  }

  async createStaffToaster() {
    const toast = await this.toastCtrl.create({
      message: 'Staff Created',
      color: 'success',
      duration: 2000,
    });
    toast.present();
  }
}
