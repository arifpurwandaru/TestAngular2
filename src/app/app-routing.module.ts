import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent }   from './employee.component';
import { CreateComponent } from './create.component';
import { UpdelComponent } from './updel.component';

const routes: Routes = [
  { path: '', redirectTo: '/listempl', pathMatch: 'full' },
  { path: 'listempl',  component: EmployeeComponent },
  { path: 'addempl', component: CreateComponent },
  { path: 'updel/:id', component: UpdelComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
