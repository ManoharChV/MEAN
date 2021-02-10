import { Component, OnInit } from '@angular/core';
import { HeroCRUDService } from './hero.service';

@Component({
  selector: 'app-root',
  template : `
  <h1>CRUD Application</h1>
  
  <table>
    <tbody>
      <tr>
       <td>Title</td>
       <td> <input [(ngModel)]="nhero.title" > </td>
      </tr>
      <tr>
       <td>City</td>
       <td> <input [(ngModel)]="nhero.city" > </td>
      </tr>
      <tr>
        <td>Ticket Price</td>
        <td> <input [(ngModel)]="nhero.ticketprice"  > </td>
      </tr>
       <tr>
         <td> </td>
         <td> <button (click)="addHero()">Add New Hero</button> </td>
       </tr>
    </tbody>
  </table>
  <hr>
  <table>
    <thead>
      <tr>
       <th> Sl # </th>
       <th> Title </th>
       <th> City </th>
       <th> Ticket Price </th>
       <th> Edit </th>
       <th> Delete </th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let hero of herolist; index as idx">
       <td>{{ idx+1 }}</td>
       <td>{{ hero.title }}</td>
       <td>{{ hero.city }}</td>
       <td>{{ hero.ticketprice }}</td>
       <td>
         <button (click)="editHero(hero._id)">Edit Hero Info</button>
       </td>
       <td>
         <button (click)="deleteHero(hero._id)">Delete Hero</button>
       </td>
      </tr>
    </tbody>
  </table>

  <hr>
  <div *ngIf="editBox">
    <table>
    <tbody>
      <tr>
       <td>Title</td>
       <td> <input [(ngModel)]="ehero.title" > </td>
      </tr>
      <tr>
       <td>City</td>
       <td> <input [(ngModel)]="ehero.city" > </td>
      </tr>
      <tr>
        <td>Ticket Price</td>
        <td> <input [(ngModel)]="ehero.ticketprice"  > </td>
      </tr>
       <tr>
         <td> </td>
         <td> <button (click)="updateHero(ehero)">Update Hero</button> </td>
       </tr>
    </tbody>
  </table>
  </div>
  `
})
export class AppComponent implements OnInit {
  title = 'step7-crud';
  herolist;
  editBox = false;
  nhero = {
    "title": '',
    "city": '',
    "ticketprice": '' 
  };
  ehero = {};

  constructor(private hs:HeroCRUDService){}
  ngOnInit(){
    this.refresh();
  }
  refresh(){
    this.hs.getHeroData().subscribe((res) => {
      this.herolist = res;
    })
  }
  addHero(){
    this.hs.writeHeroData(this.nhero).subscribe((res) => {
      this.refresh();
    })
  }

  deleteHero(hid){
    this.hs.deleteHeroData(hid).subscribe((res) =>{
      this.refresh();
    })
  }

  editHero(hid){
    this.editBox = true;
    this.hs.findHerotoUpdate(hid).subscribe((res) => {
      this.ehero = res;
    })
  }

  updateHero(hero){
      this.hs.updateValuesToHero(hero._id,hero).subscribe( (res) =>{
        this.editBox = false;
        this.ehero = {};
        this.refresh();
      })
  }
}
