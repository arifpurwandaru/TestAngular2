import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent }   from './employee.component';

const routes: Routes = [
  { path: '', redirectTo: '/listempl', pathMatch: 'full' },
  { path: 'listempl',  component: EmployeeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
