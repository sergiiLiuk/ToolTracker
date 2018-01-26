import { Component, OnInit, Input} from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Employee } from '../../model/employee.model';
import { EmployeeService } from '../../services/employee-crud/employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  @Input() employee;
  employeeEdit: Employee = new Employee();
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    Object.assign(this.employeeEdit, this.employee);
  }

  onSubmit(form: NgForm){
    this.employee.editable = false;
    this.employeeService.updateEmployee(form.value); 
  }

  onDelete(form: NgForm){
    if (confirm('Are you sure to delete this record?')==true){
      this.employeeService.deleteEmployee(form.value.$key);
      this.resetForm(form);
    }
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.employeeService.selectedEmployee = {
      $key: null,
      first_name: "",
      last_name: "",
      position: "",
      phone: "",
      email: "",
      password: ""
    }
  }
}
