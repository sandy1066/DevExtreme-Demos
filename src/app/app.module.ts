import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  DxFormModule, 
          DxCheckBoxModule, 
          DxDataGridModule, 
          DxButtonModule, 
          DxDropDownButtonModule, 
          DxDateBoxModule, 
          DxTextBoxModule,
          DxFileUploaderModule,
          DxHtmlEditorModule,
          DxSelectBoxModule,
          DxValidatorModule } from 'devextreme-angular';
import { AddDataComponent } from './add-data/add-data.component';
import { ViewDataComponent } from './view-data/view-data.component';
import { DataGridArrayComponent } from './data-grid/data-grid-array/data-grid-array.component';
import { DataGridCustomComponent } from './data-grid/data-grid-custom/data-grid-custom.component';
import { HttpClientModule } from '@angular/common/http';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DataGridEditingComponent } from './data-grid-editing/data-grid-editing.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDataComponent,
    ViewDataComponent,
    DataGridArrayComponent,
    DataGridCustomComponent,
    DynamicFormComponent,
    DataGridEditingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxFormModule,
    DxCheckBoxModule,
    DxDataGridModule,
    DxButtonModule,
    DxDropDownButtonModule,
    DxDateBoxModule,
    DxTextBoxModule,
    DxFileUploaderModule,
    DxHtmlEditorModule,
    DxSelectBoxModule,
    DxValidatorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
