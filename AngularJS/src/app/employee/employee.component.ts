
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
  }
  onSubmit(form: NgForm) {
    console.log('Component TS Employee form data :');
    console.log(form.value);
    this.employeeService.postEmployee(form.value).subscribe((res) => {
      this.resetForm(form);
      M.toast({html: 'Saved successfully', classes: 'rounded'});
    });
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
