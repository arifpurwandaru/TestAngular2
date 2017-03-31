import { Component }          from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/listempl" routerLinkActive="active">List Employee</a>
      <a routerLink="/addempl" routerLinkActive="active">Add Employee</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VWXYZ Company';
}
