import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';
import { EmployeesService } from './employees.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
})
export class EmployeesPage implements OnInit {

  employees:Employee[];

  constructor(private employeesService:EmployeesService) { }

  ngOnInit() {
    this.employees=this.employeesService.getAllEmployees();
  }

}
