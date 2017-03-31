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


  getEmployee(id: number): Promise<Employee> {
    const url = `${this.theUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Employee)
      .catch(this.handleError);
  }


  delete(id: number): Promise<void> {
    const url = `${this.theUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Employee> {
    return this.http
      .post(this.theUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Employee)
      .catch(this.handleError);
  }

  update(empl: Employee): Promise<Employee> {
    const url = `${this.theUrl}/${empl.id}`;
    return this.http
      .put(url, JSON.stringify(empl), {headers: this.headers})
      .toPromise()
      .then(() => empl)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }
}