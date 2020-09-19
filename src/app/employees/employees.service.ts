import { Employee } from './employee.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private employees: Employee[]=[
    {
      id:'e1',
      name:'sagar',
      designation:'HOD',
      salary:'100000'
    },
    {
      id:'e2',
      name:'Rinam',
      designation:'CEO',
      salary:'90000'
    },
    {
      id:'e3',
      name:'Rajan',
      designation:'CTo',
      salary:'80000'
    }
  ];
  constructor() { }

  getAllEmployees(){
    return [...this.employees];
  }
}
