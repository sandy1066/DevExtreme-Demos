import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDataComponent } from './add-data/add-data.component';
import { DataGridEditingComponent } from './data-grid-editing/data-grid-editing.component';
import { DataGridArrayComponent } from './data-grid/data-grid-array/data-grid-array.component';
import { DataGridCustomComponent } from './data-grid/data-grid-custom/data-grid-custom.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ViewDataComponent } from './view-data/view-data.component';

const routes: Routes = [
  {path: '', redirectTo: '/view', pathMatch: 'full'},
  {path: 'view', component: ViewDataComponent},
  {path: 'add/:id', component: AddDataComponent},
  {path: 'form', component: DynamicFormComponent},
  {path: 'edit/:id', component: AddDataComponent},
  {path: '1', component: DataGridArrayComponent},
  {path: '2', component: DataGridCustomComponent},
  {path: '3', component: DataGridEditingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
