import { Component, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent implements OnInit {

  constructor() { }
  
  localStudents: any;

  ngOnInit(): void {
    this.localStudents = JSON.parse(localStorage.getItem('formData'));
  }

  onDelete(id) {
    this.localStudents = this.deleteStudent(id);
  }

  deleteStudent(id) {
    let students = [];
    if(localStorage.getItem('formData')){
      students = JSON.parse(localStorage.getItem('formData'));

      students.forEach(
        function(item, index){
          if(id === index){
            students.splice(index,1);
          }
        });
    localStorage.setItem('formData',JSON.stringify(students));
    return students;
    }
  }
}
