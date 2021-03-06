import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { EmployeeComponent }   from './employee.component';
import { CreateComponent } from './create.component';
import { UpdelComponent } from './updel.component';
import{ EmployeeService } from './employee.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    EmployeeComponent,
    CreateComponent,
    UpdelComponent
  ],
  providers: [ EmployeeService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
