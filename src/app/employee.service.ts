import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Employee } from './employee';

@Injectable()
export class EmployeeService{

  private headers = new Headers({'Content-Type': 'application/json'});
  private theUrl = 'api/employees';  // URL to web api

  constructor(private http: Http) { }


  getEmployees(): Promise<Employee[]> {
    return this.http.get(this.theUrl)
               .toPromise()
               .then(response => response.json().data as Employee[])
               .catch(this.handleError);
  }



  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }
}