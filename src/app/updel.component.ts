import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location }               from '@angular/common';

import { Employee }        from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'empl-updel',
  templateUrl: './updel.component.html',
  styleUrls: [ './updel.component.css' ]
})
export class UpdelComponent implements OnInit {
  employee: Employee;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}


    getEmployee(): void {
        this.route.params.subscribe((params: Params) => {
        this.employeeService
            .getEmployee(+params['id']).then((data) => {
                this.employee = data;
            });
      });

  }


  ngOnInit(): void {
    this.getEmployee();
  }



  save(): void {
    this.employeeService.update(this.employee)
      .then(() => this.goBack());
  }

  delete(): void{
      this.employeeService.delete(this.employee.id)
      .then(( )=> this.goBack());
  }

  goBack(): void {
    this.router.navigate(['/listempl']);
  }
}
