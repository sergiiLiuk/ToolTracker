import { Employee } from '../../model/employee.model';
import { EmployeeService } from '../../services/employee-crud/employee.service';
import { Component, OnInit, Input} from '@angular/core';
 
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  @Input() employees;
  employeeList: Employee[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    var x = this.employeeService.getData();
    x.snapshotChanges().subscribe(item =>{
      this.employeeList = [];
      item.forEach(element =>{
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.employeeList.push(y as Employee);   
      });      
    });    
  }
}
