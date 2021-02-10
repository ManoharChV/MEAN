import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BatmanComponent } from './batman.component';
import { HomeComponent } from './home.component';
import { IronmanComponent } from './ironman.component';
import { NotfoundComponent } from './notfound.component';
import { SupermanComponent } from './superman.component';

@NgModule({
  declarations: [ 
    AppComponent, 
    HomeComponent, 
    BatmanComponent, 
    SupermanComponent, 
    IronmanComponent, 
    NotfoundComponent ],
  imports: [ BrowserModule, FormsModule, RouterModule.forRoot([
    { path : "", component : HomeComponent },
    { path : "batman", component : BatmanComponent },
    { path : "superman", component : SupermanComponent },
    { path : "superman/:pow", component : SupermanComponent },
    { path : "ironman", component : IronmanComponent },
    { path : "ca", redirectTo : "ironman" },
    { path : "**", component : NotfoundComponent } 
  ]) ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
