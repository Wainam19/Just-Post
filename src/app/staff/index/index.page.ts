import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { StaffService } from '../../shared/services/staff/staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class StaffPage implements OnInit {
  staff: any = [];
  header = ['#', 'ID', 'Name', 'Gender', 'Email', 'Phone', 'Company', ''];
  searchKey: any;

  constructor(
    private staffService: StaffService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.getStaffData();
  }

  ionViewWillEnter() {
    this.getStaffData();
  }

  getStaffData() {
    this.staffService.getStaffList().subscribe((res) => {
      if (res) {
        this.staff = res;
      } else {
        console.log('There is an error occur, Please try again');
      }
    });
  }

  getSearchStaff(e: any) {
    if (e.target.value) {
      this.searchKey = e.target.value;
      if (isNaN(this.searchKey)) {
        this.staffService.getStaffByCompany(this.searchKey).subscribe((res) => {
          this.staff = res;
        });
      } else {
        this.staffService.getStaffById(this.searchKey).subscribe((res) => {
          this.staff = res;
        });
      }
    } else {
      this.getStaffData();
    }
  }

  async deleteAlert(id: string) {
    const alert = await this.alertCtrl.create({
      header: 'Are you sure to delete the staff?',
      subHeader: 'This action is irreversible.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Confirm',
          handler: () => {
            this.deleteStaff(id);
            this.deleteStaffToaster();
          },
        },
      ],
    });

    await alert.present();
  }

  async deleteStaffToaster() {
    const toast = await this.toastCtrl.create({
      message: 'Staff Deleted',
      duration: 2000,
    });
    toast.present();
  }

  deleteStaff(id: string) {
    this.staffService.deleteStaff(id).subscribe(() => {
      this.getStaffData();
    });
  }
}
