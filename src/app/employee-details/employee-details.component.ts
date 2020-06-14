import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';


@Component({
  selector: 'app-employee-details',
  template:`
  <h3>Employee Details</h3>
  <p>Id : {{selectedEmployee.id}}</p>
  <p>Name: {{selectedEmployee.name}}</p>
  <p>Employee: {{selectedEmployee.email}}</p>
  `,
  // templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id:string;
  selectedEmployee:Employee;

  constructor(private route:ActivatedRoute, private employeService:EmployeeService){
    
  }

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.selectedEmployee = this.employeService.getEmployeeById(this.id);
  }

  // constructor( private route: ActivatedRoute) { }
  // id:string;

  // ngOnInit() {
  //   this.id = this.route.snapshot.paramMap.get('id');
  //   console.log(this.id);
  // }

}
