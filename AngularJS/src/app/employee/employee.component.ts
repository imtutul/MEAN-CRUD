import { Employee } from './../share/employee.model';

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EmployeeService } from '../share/employee.service';

declare var M: any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.resetForm();
    console.log('Getting employee list:');
    this.getEmployees();
  }

  onSubmit(form: NgForm) {
    console.log('Component TS Employee form data :');
    console.log(form.value);
    if (form.value._id === '') {
      this.employeeService.postEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        M.toast({html: 'Successfully saved employee', classes: 'rounded'});
        this.getEmployees();
      });
    }    else {
      this.employeeService.updateEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        M.toast({html: 'Successfully update employee', classes: 'rounded'});
        this.getEmployees();
      });
    }
  }
  onDelete(id, form: NgForm) {
    console.log(id);
    console.log(form);
    const retVal  = confirm('Are you sure! you want to delete this employee');
    if ( retVal  === true){
      this.employeeService.deleteEmployee(form).subscribe((res) => {
        M.toast({html: 'Successfully deleted employee', classes: 'rounded'});
        this.getEmployees();
      });
    };
  }
  getEmployees() {
    this.employeeService.getEmployees().subscribe((res) => {
      this.employeeService.employees = res as Employee[];
      console.log(res);
    });
  }
  getEmployeeById(id) {
    this.employeeService.getEmployeeById(id).subscribe((res) => {
      this.employeeService.employees = res as Employee[];
      console.log(res);
    });
  }
  onEdit(emp){
    this.employeeService.selectedEmployee = emp;
  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
    this.employeeService.selectedEmployee = {
      _id : '',
      name : '',
      position : '',
      office : '',
      salary : null
    }
  }
}
