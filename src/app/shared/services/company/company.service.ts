import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../../models/company.model';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  companys: Company[];
  readonly baseURL = 'http://localhost:3010/companies';

  constructor(private http: HttpClient) {}

  getCompanyList() {
    return this.http.get(this.baseURL);
  }

  getSpecificCompany(id: string): Observable<Company> {
    return this.http.get<Company>(this.baseURL + `/${id}`);
  }

  getCompanyByCode(code: string) {
    return this.http.get(this.baseURL + `/?code=${code}`);
  }

  getCompanyByName(name: string) {
    return this.http.get(this.baseURL + `/?name=${name}`);
  }

  createCompany(
    name: string,
    code: string,
    description: string
  ): Observable<any> {
    var companyObject = {
      name: name,
      code: code,
      description: description,
    };
    return this.http.post(this.baseURL, companyObject);
  }

  updateCompany(
    _id: string,
    name: string,
    code: string,
    description: string
  ): Observable<any> {
    var companyObject = {
      name: name,
      code: code,
      description: description,
    };
    var formData: any = new FormData();
    formData.append('name', name);
    formData.append('code', code);
    formData.append('description', description);

    return this.http.put(this.baseURL + `/${_id}`, companyObject);
  }

  deleteCompany(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
