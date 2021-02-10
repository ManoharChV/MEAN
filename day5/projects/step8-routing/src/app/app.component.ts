import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Heroes Application</h1>
    <ul>
      <li> <a [routerLink]="['']">Home</a> </li>
      <li> <a [routerLink]="['batman']">Batman</a> </li>
      <li> <a [routerLink]="['superman']">Superman</a> </li>
      <li> <a [routerLink]="['ironman']">Ironman</a> </li>
      <li> <a [routerLink]="['hulk']">Hulk</a> </li>
      <li> <a [routerLink]="['ca']">Captain America</a> </li>
    </ul>
    <hr>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'step8-routing';
}
