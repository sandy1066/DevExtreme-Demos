import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import { ApiData } from './data';
import { FormItem } from './forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit, AfterViewInit {

  formItems: any[] = FormItem;
  apiData: any[] = ApiData;
  studentData: any = {};

  ngOnInit(): void {
  }
  
  ngAfterViewInit() {
    console.log(this.form)
  }

  @ViewChild(DxFormComponent) form: DxFormComponent

  constructor() { }

  onSubmit(e: any) {
    this.addStudent(this.studentData);
  }

  addStudent(myStudent: any) {
    let students = [];
    if(localStorage.getItem('dynamicFormData')){
      students = JSON.parse(localStorage.getItem('dynamicFormData'));
      students = [...students, myStudent];
    }
    else{
      students = [myStudent];
    }
    localStorage.setItem("dynamicFormData",JSON.stringify(students));
  }

  dataChanged(e){
    let pin = this.studentData.pinCode;
    for(let item of this.apiData){
      if(pin === item.pinCode){
        this.studentData.pinCode = item.pinCode;
        this.studentData.city = item.city;
        this.studentData.state = item.state;
        this.studentData.country = item.country;
      }
    }
    this.maskPhone(this.studentData.phoneNumber);
  }

  maskPhone(phone) {
    let phoneMask = phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    this.studentData.phoneNumber = phoneMask;
  }
}
