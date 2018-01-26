import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee-crud/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers : [EmployeeService]
})
export class EmployeesComponent implements OnInit {
  addend: boolean;
  constructor(private EmployeeService: EmployeeService) { }

  ngOnInit() {
  }

}
