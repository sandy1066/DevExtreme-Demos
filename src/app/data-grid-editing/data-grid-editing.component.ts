import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { Customer, LocalDataService, State } from '../local-data.service';

@Component({
  selector: 'app-data-grid-editing',
  templateUrl: './data-grid-editing.component.html',
  styleUrls: ['./data-grid-editing.component.css']
})
export class DataGridEditingComponent implements OnInit, AfterViewInit {

  customers: Customer[] = [];
  states: State[] = [];

  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;

  constructor(service: LocalDataService) { 
    this.customers = service.getCustomers();
    this.states = service.getStates();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.log(this.dataGrid)
  }

}
