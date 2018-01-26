import { Injectable } from '@angular/core';
import { Employee } from '../../model/employee.model';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class EmployeeService {
  employeeList : AngularFireList<any>;
 
  selectedEmployee: Employee = new Employee();
  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.employeeList = this.firebase.list('employees');
    return this.employeeList;
  }
 
  createEmployee(employee: Employee){
    this.employeeList.push({
      first_name: employee.first_name,
      last_name: employee.last_name,
      position: employee.position,
      phone: employee.phone,
      email: employee.email,
      password: employee.password
    });
  }

  updateEmployee(employee: Employee){
    this.employeeList.update(employee.$key,{     
      first_name: employee.first_name,
      last_name: employee.last_name,
      position: employee.position,
      phone: employee.phone,
      email: employee.email,
      password: employee.password
    });
  }

  deleteEmployee(key: string){
    this.employeeList.remove(key);
  }
}
