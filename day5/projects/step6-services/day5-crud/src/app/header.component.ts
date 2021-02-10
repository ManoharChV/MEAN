import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <h1>Version Number : {{ ver }}</h1>
  <ul class="nav justify-content-center">
    <li *ngFor="let hero of heroes" class="nav-item">
      <a class="nav-link" href="#">{{ hero.title }}</a>
    </li>
  </ul>
  `,
  styles: [
  ]
})
export class HeaderComponent {
  @Input() heroes = [];
  @Input() ver = 0;

}
