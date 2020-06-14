import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeList:Employee[] = [
    {id:1, name:"Shyam", email:"shyamjaiswal@gmail.com"},  
    {id:2, name:"Bob", email:"bob32@gmail.com"},  
    {id:3, name:"Jai", email:"jai87@gmail.com"}
  ]

  getEmployeeById(id){
    
    let employee:Employee;

    for(let i = 0; i < this.employeeList.length; i++){
      if(id == this.employeeList[i].id){
        employee = this.employeeList[i];
        break;
      }
    }

    return employee;
  }

  constructor() { }
}
