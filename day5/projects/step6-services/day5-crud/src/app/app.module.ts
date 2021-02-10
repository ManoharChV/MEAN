import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { GridComponent } from './grid.component';
import { HeroServices } from './hero.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GridComponent
  ],
  imports: [ BrowserModule, HttpClientModule ],
  providers: [ HeroServices ],
  bootstrap: [AppComponent]
})
export class AppModule { }
