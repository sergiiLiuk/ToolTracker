import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  private isEmployeeLoggedIn;
  private employee_name;

  constructor() {
    this.isEmployeeLoggedIn = false;
  }

  setEmployeeLoggedIn(){
    this.isEmployeeLoggedIn = true;
  }
  getEmployeeLoggedIn(){
    return this.isEmployeeLoggedIn;
  }

  setEmployeeName(name){
    this.employee_name = name;
  }
  getEmployeeName(){
    return this.employee_name;
  } 

}
