import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-batman',
  template: `
    <h1> Batman works! </h1>
    <input [(ngModel)]="boost" type="range">{{ boost }}
    <br>
    <a [routerLink]="'/superman/'+boost">Call Superman</a>
    <button (click)="callSuperman()">Call Superman</button>
  `,
  styles: [
  ]
})
export class BatmanComponent implements OnInit {
  boost = 0 ;
  constructor( private router:Router) { }

  ngOnInit(): void {}
  callSuperman(){
    this.router.navigate(['/superman',this.boost]);
  }
}
