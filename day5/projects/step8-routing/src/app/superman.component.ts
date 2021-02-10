import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-superman',
  template: `
  <h1> Superman works! </h1>
  <h2>Power is  : {{ power || 0 }}</h2>
  `,
  styles: [
  ]
})
export class SupermanComponent implements OnInit {
  power;
  constructor(private actRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.power = this.actRoute.snapshot.params['pow'];
  }

}
