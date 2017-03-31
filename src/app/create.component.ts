import { Component, OnInit }      from '@angular/core';
import { Router }            from '@angular/router';

import { Employee }        from './employee';
import { EmployeeService } from './employee.service';
import { EmployeeComponent } from './employee.component';

@Component({
  selector: 'create-empl',
  templateUrl: './create.component.html',
  styleUrls: [ './create.component.css' ]
})
export class CreateComponent implements OnInit {
  employee: Employee;

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  add(name: string, job: string, salary: string, bonus: string, supervisor: string): void {
    name = name.trim();
    if (!name) { return; }
    this.employeeService.create(name,job,salary,bonus,supervisor) 
      .then(employee => {
        this.router.navigate(['/listempl']);
      });
  }

}
