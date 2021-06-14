import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { GridColumn } from 'src/app/columns';


@Component({
  selector: 'app-data-grid-custom',
  templateUrl: './data-grid-custom.component.html',
  styleUrls: ['./data-grid-custom.component.css']
})
export class DataGridCustomComponent implements OnInit {

  customData: CustomStore;
  gridColumns: any[] = GridColumn;
  columnList: any[] = [];

  ngOnInit(): void {
    this.getGridColumn();
  }

  constructor(private http: HttpClient) {
    this.customData = new CustomStore({
        key: 'id',
        load: () => {
            return this.http.get('https://mocki.io/v1/aa5d4d55-8187-499c-ae25-dc39adb8aa11')
                .toPromise()
                .catch(() => { throw 'Data loading error' });
        }
    });
  }

  getGridColumn() {
    this.gridColumns.forEach((column) => {
      const columnObj = {};
      columnObj['dataField'] = column.DataField;

      this.columnList.push(columnObj);
    });
  }
}
