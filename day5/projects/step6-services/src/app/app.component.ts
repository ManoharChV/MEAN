import { Component } from '@angular/core';
import { HeroServices } from './hero.service';

@Component({
  selector: 'app-root',
  template : `
  <h1 class="text-center">Heroes Application</h1>
  <app-header [heroes]="heroesData" [ver]="verData" ></app-header>
  <hr>
  <app-grid [heroes]="heroesData" [ver]="verData" ></app-grid>
  `,
  styles: [`
  
  `]
})
export class AppComponent {
  title = 'step5-pipes';
  heroesData = [];
  verData = 0;
  constructor(private hs:HeroServices){
    // this.heroesData = this.hs.getHeroes();
    this.hs.getHeroes().subscribe((res) => {
     // console.log(res);
     this.heroesData = res['heroes'];
    })
    this.verData = this.hs.getVersion();
  }
}
