import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee-crud/employee.service';
import { LoginService } from '../services/login/login.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(  private employee:LoginService) { }
  employee_name = this.employee.getEmployeeName();

  ngOnInit() {
  }

  
}
