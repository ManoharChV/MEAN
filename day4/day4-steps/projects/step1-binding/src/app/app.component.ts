import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template : `
  <h1>{{ title }} !!! </h1>
  <h2 innerHTML="{{ title.length }}"></h2>
  <h2 innerHTML="{{ 5+5 }}"></h2>
  <h2 [innerHTML]="title"></h2>
  <h1 [class]="selectedItem">{{ title }}</h1>
  <input value="{{title}}" type="text">
  <br>
  <input [value]="title" type="text">
  <h2>{{ saymessage() }}</h2>
  <button (click)="clickHandler($event)">Button 1</button><br>
  <button (click)="clickHandler($event)">Button 2</button><br>
  <button (click)="clickHandler($event)">Button 3</button><br>
  <button (click)="clickHandler($event)">Button 4</button>
  <br>
  <input #ti1 [value]="message" (input)="message = ti1.value " type="text">
  <button (click)=" message = ti1.value ">Get Message and Display</button>
  <h1>{{ message }}</h1>

  `,
  styles: [`
    .box{
    width : 200px;   height : 200px;   background-color : green;
    margin : auto;   color : white;    text-align : center;
    font-size : 16px;
    }
  `]
})
export class AppComponent {
  title = 'Hello from Step1 Binding';
  message = 'default';
  selectedItem = 'box';
  saymessage(){
    return "Hello from Say Message";
  }
  clickHandler(evt){
   alert(" you clicked "+evt.target.innerHTML);
  }
}
