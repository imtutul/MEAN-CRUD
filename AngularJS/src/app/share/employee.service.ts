import { Employee } from './employee.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/observable';

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';


@Injectable()
export class EmployeeService {
  selectedEmployee: Employee;
  employees: Employee[];
  readonly baseUrl = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }

  postEmployee(emp: Employee) {
    return this.http.post(this.baseUrl, emp);
  }
  updateEmployee(emp: Employee) {
    return this.http.put(this.baseUrl + '/' + emp._id, emp);
  }
  deleteEmployee(emp) {
    return this.http.delete(this.baseUrl + '/' + emp._id, emp);
  }
  getEmployees() {
    return this.http.get(this.baseUrl);
  }
  getEmployeeById(id) {
    return this.http.get(this.baseUrl + '/' + id);
  }
}
