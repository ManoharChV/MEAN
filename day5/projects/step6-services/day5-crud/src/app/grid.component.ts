import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  template: `
  <h1>Version Number : {{ ver }}</h1>
  <table class="table table-striped table-secondary">
  <thead class="table-dark">
      <tr>
        <th>Sl #</th>
        <th>Title</th>
        <th>Poster</th>
        <th>Full Name</th>
        <th>City</th>
        <th>Ticket Price</th>
        <th>Release Date</th>
      </tr>
  </thead>
  <tbody>
    <tr *ngFor="let hero of heroes">
      <td>{{ hero.sl }}</td>
      <td>{{ hero.title | uppercase }}</td>
      <td>
        <img width="40" src="{{ hero.poster }}" alt="{{ hero.title }}">
      </td>
      <td>{{ hero.firstname+' '+hero.lastname }}</td>
      <td>{{ hero.city }}</td>
      <td>{{ hero.ticketprice | currency : 'INR' : 'symbol' : '4.2-2' }}</td>
      <td>{{ hero.releasedate | date : 'dd-MMMM-yyyy' }}</td>
    </tr>
  </tbody>
</table>
  `,
  styles: [
  ]
})
export class GridComponent{
  @Input() heroes = [];
  @Input() ver = 0;
}
