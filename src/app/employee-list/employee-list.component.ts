import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  template:`
    <h3>Employee List</h3>
    <ul >
      <li *ngFor="let emp of empList"><a routerLink="../employee-details/{{emp.id}}">{{emp.name}}</a></li>
    </ul>
  `,
  // templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  empList:Employee[];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.empList =  this.employeeService.employeeList;
    console.log(this.empList);
  }

}
