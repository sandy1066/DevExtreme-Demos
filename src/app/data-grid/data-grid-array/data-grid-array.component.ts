import { Component, OnInit } from '@angular/core';
import { Customer, LocalDataService, State } from 'src/app/local-data.service';
import { Workbook } from 'exceljs';
import saveAs from 'file-saver';
import { exportDataGrid } from 'devextreme/excel_exporter';

@Component({
  selector: 'app-data-grid-array',
  templateUrl: './data-grid-array.component.html',
  styleUrls: ['./data-grid-array.component.css']
})
export class DataGridArrayComponent implements OnInit {

  title = 'Getting Started with DataGrid';
  customers: Customer[] = [];
  states: State[] = [];

  constructor(service: LocalDataService) {
    this.customers = service.getCustomers();
    this.states = service.getStates();
  }

  ngOnInit(): void {
  }

  exportGrid(e) {
    const workbook = new Workbook(); 
    const worksheet = workbook.addWorksheet("Main sheet"); 
    exportDataGrid({ 
        worksheet: worksheet, 
        component: e.component
    }).then(function() {
        workbook.xlsx.writeBuffer().then(function(buffer: BlobPart) { 
            saveAs(new Blob([buffer], { type: "application/octet-stream" }), "DataGrid.xlsx"); 
        }); 
    }); 
    e.cancel = true; 
  }
}
