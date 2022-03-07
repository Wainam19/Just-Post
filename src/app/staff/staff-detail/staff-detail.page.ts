import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CompanyService } from 'src/app/shared/services/company/company.service';
import { Staff } from 'src/app/shared/models/staff.model';
import { StaffService } from 'src/app/shared/services/staff/staff.service';

@Component({
  selector: 'app-staff-detail',
  templateUrl: './staff-detail.page.html',
  styleUrls: ['./staff-detail.page.scss'],
})
export class StaffDetailPage implements OnInit {
  staffForm: FormGroup;
  staff: Staff = new Staff();
  staffId: string;
  company: any = [];

  constructor(
    private staffService: StaffService,
    private route: ActivatedRoute,
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
    this.getStaffDetail();
  }

  ionViewWillEnter() {
    this.getCompany();
  }

  getStaffDetail() {
    this.staffId = this.route.snapshot.paramMap.get('id');
    this.staffService.getSpecificStaff(this.staffId).subscribe((res) => {
      this.staffForm = new FormGroup({
        staffID: new FormControl(res.staffId),
        name: new FormControl(res.name),
        gender: new FormControl(res.gender),
        email: new FormControl(res.email),
        phone: new FormControl(res.phone),
        company: new FormControl(res.company),
      });
      this.staff = res;
    });
  }

  getCompany() {
    this.companyService.getCompanyList().subscribe((res) => {
      this.company = res;
    });
  }

  updateStaff() {
    this.staffService
      .updateStaff(
        this.staffId,
        this.staffForm.value.staffID,
        this.staffForm.value.name,
        this.staffForm.value.gender,
        this.staffForm.value.email,
        this.staffForm.value.phone,
        this.staffForm.value.company
      )
      .subscribe(() => {
        this.router.navigate(['/staff']);
        this.updateStaffToaster();
      });
  }

  async updateStaffToaster() {
    const toast = await this.toastCtrl.create({
      message: 'Staff Info Updated',
      color: 'success',
      duration: 2000,
    });
    toast.present();
  }
}
