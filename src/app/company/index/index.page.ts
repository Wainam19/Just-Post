import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { CompanyService } from '../../shared/services/company/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class CompanyPage implements OnInit {
  company: any = [];
  header = ['#', 'Name', 'Code', 'Description', ''];
  searchKey: any;

  constructor(
    private companyService: CompanyService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.getCompanyData();
  }

  ionViewWillEnter() {
    this.getCompanyData();
  }

  getCompanyData() {
    this.companyService.getCompanyList().subscribe((res) => {
      if (res) {
        this.company = res;
      } else {
        console.log('There is an error occur, Please try again');
      }
    });
  }

  getSearchCompany(e: any) {
    if (e.target.value) {
      this.searchKey = e.target.value;
      if (isNaN(this.searchKey)) {
        this.companyService
          .getCompanyByName(this.searchKey)
          .subscribe((res) => {
            this.company = res;
          });
      } else {
        this.companyService
          .getCompanyByCode(this.searchKey)
          .subscribe((res) => {
            this.company = res;
          });
      }
    } else {
      this.getCompanyData();
    }
  }

  async deleteAlert(id: string) {
    const alert = await this.alertCtrl.create({
      header: 'Are you sure to delete the company?',
      subHeader: 'This action is irreversible.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Confirm',
          handler: () => {
            this.deleteCompany(id);
            this.deleteCompanyToaster();
          },
        },
      ],
    });

    await alert.present();
  }

  async deleteCompanyToaster() {
    const toast = await this.toastCtrl.create({
      message: 'Company Deleted',
      duration: 2000,
    });
    toast.present();
  }

  deleteCompany(id: string) {
    this.companyService.deleteCompany(id).subscribe(() => {
      this.getCompanyData();
    });
  }
}
