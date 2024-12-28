import { Component } from '@angular/core';
import{Employee} from './employee'
import { FullTimeEmployee } from './FullTimeEmployee';
import { PartTimeEmployee } from './PartTimeEmployee';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
employees:Employee[] = [];

constructor(){
   // adding full time and part time employees
   this.employees=[
    new FullTimeEmployee(1,'Ebrus', 900000),
    new PartTimeEmployee(2,'Hasso',20,25),
    new FullTimeEmployee(3,'halo',5000)

   ];
}

}
