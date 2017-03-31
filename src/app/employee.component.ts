import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Employee }                from './employee';
import { EmployeeService }         from './employee.service';

@Component({
  selector: 'the-employee',
  templateUrl: './employee.component.html',
  styleUrls: [ './employee.component.css' ]
})

export class EmployeeComponent implements OnInit{
    employees: Employee[]

    constructor(
    private employeeService: EmployeeService,
    private router: Router) { }

    getEmployees(): void {
        this.employeeService
            .getEmployees()
            .then(employees => this.employees = employees);
  }


  ngOnInit(): void {
    this.getEmployees();
  }


  onSelect(employee: Employee): void {
    this.router.navigate(['/updel',employee.id]);
  }

}