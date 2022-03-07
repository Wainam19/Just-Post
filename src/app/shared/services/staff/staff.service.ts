import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Staff } from '../../models/staff.model';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  staffs: Staff[];
  readonly baseURL = 'http://localhost:3010/staffs';

  constructor(private http: HttpClient) {}

  getStaffList() {
    return this.http.get(this.baseURL);
  }

  getSpecificStaff(id: string): Observable<Staff> {
    return this.http.get<Staff>(this.baseURL + `/${id}`);
  }

  getStaffByCompany(company: string) {
    return this.http.get(this.baseURL + `/?company=${company}`);
  }

  getStaffById(id: string) {
    return this.http.get(this.baseURL + `/?staffId=${id}`);
  }

  createStaff(
    staffId: number,
    name: string,
    gender: string,
    email: string,
    phone: string,
    company: string
  ): Observable<any> {
    var staffObject = {
      staffId: staffId,
      name: name,
      gender: gender,
      email: email,
      phone: phone,
      company: company,
    };

    return this.http.post(this.baseURL, staffObject);
  }

  updateStaff(
    _id: string,
    staffId: number,
    name: string,
    gender: string,
    email: string,
    phone: string,
    company: string
  ): Observable<any> {
    var staffObject = {
      staffId: staffId,
      name: name,
      gender: gender,
      email: email,
      phone: phone,
      company: company,
    };

    return this.http.put(this.baseURL + `/${_id}`, staffObject);
  }

  deleteStaff(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
