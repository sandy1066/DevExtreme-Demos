import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  actions: Array<{id: Number, text: String}> = [
    {id: 1, text: "Data-Grid Static"},
    {id: 2, text: "Data-Grid Dynamic"},
    {id: 3, text: "Data-Grid Editing"}
  ];

  constructor(private router: Router) { }

  goToDataGrid(e) : void {
    if(e.itemData.id === 1) {
      this.router.navigate([`${e.itemData.id}`]);
    }
    if(e.itemData.id === 2) {
      this.router.navigate([`${e.itemData.id}`]);
    }
    if(e.itemData.id === 3) {
      this.router.navigate([`${e.itemData.id}`]);
    }
  }
}
