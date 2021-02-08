import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template : `
  <h1>Welcome to your life</h1>
  `,
  styles: [`
    h1{
      color : white;
      background-color : grey;
      font-family : arial;
      padding : 10px
    }
  `]
})
export class AppComponent {
  title = 'day4-steps';
}
