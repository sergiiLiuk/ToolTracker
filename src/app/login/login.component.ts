import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';
import { EmployeeListComponent } from '../employees/employee-list/employee-list.component';
import { EmployeeService } from '../services/employee-crud/employee.service';
import { Employee } from '../model/employee.model';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router:Router, private loginService:LoginService, private employeeDataService:EmployeeService ) { }
  employeeList: Employee[];
  ngOnInit() {
    var x = this.employeeDataService.getData();
    x.snapshotChanges().subscribe(item =>{
      this.employeeList = [];
      item.forEach(element =>{
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.employeeList.push(y as Employee);        
      });      
    });    
  }

  loginUser(e) {
  	e.preventDefault();
  	var email= e.target.elements[1].value;
  	var password = e.target.elements[2].value;
    if (this.employeeList.find(x => x.email == email)
    &&this.employeeList.find(x => x.password == password)) {    
       this.loginService.setEmployeeLoggedIn();
       var res =  this.employeeList.find(x => x.email == email);
       this.loginService.setEmployeeName(res.first_name);
       this.router.navigate(['home']);
  	}else{
      alert("wrong user name: "+email+" or password: "+password);
    }
  }
}
