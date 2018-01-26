import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee-crud/employee.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';
 
@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  constructor(public employeeService: EmployeeService ) {     
  }
 
  ngOnInit() {
    this.resetForm(); 
  }

  onSubmit(form: NgForm){
    this.employeeService.createEmployee(form.value);
    this.resetForm(form);
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.employeeService.selectedEmployee = {
      $key: "",
      first_name: "",
      last_name: "",
      position: "",
      phone: "",
      email: "",
      password: ""
    }
  }
}
