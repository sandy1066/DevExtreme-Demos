import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DxFormComponent } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { eMailValidator } from './pin-code.validator'

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})

export class AddDataComponent implements OnInit {

  student = {
    studentName: '',
    fatherName: '',
    motherName: '',
    dateOfBirth: '',
    gender: '',
    uploaded: '',
    address: '',
    city: '',
    pinCode: '',
    state: '',
    country: '',
    mobileNumber: 0,
    skypeId: '',
    linkedInId: '',
    email: '',
    password: '',
    course: '',
    htmlValue: ''
  };
  header: string;
  id: number;
  namePattern: any = /^[^0-9]+$/;
  phonePattern: any = /^\d{10}$/;
  now: Date = new Date();
  date: Date = new Date(2017, 0, 3);
  upload: any[] = [];
  isActive: boolean = false;
  @ViewChild(DxFormComponent, { static: false }) form: DxFormComponent;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.header = this.id === 0 ? 'Add Student' : 'Edit Student';
    let students = JSON.parse(localStorage.getItem('formData'));

    if(this.id != 0){
      this.onEditStudent(students,this.id-1);
    }
  }

  onEditStudent(myStudent, id) {
    this.student = myStudent.find(function(student, index) {
      if(index === id){
        return student;
      }
    });
    console.log(this.student);
  }

  gender = ["Male", "Female", "Prefer not to say"];
  country = ["Australia", "Brazil", "India", "England", "Russia", "USA"];
  course = ["B.Tech", "BCA", "B.Sc", "B.Com", "B.A"];
  hobbies = ["Drawing", "Dancing", "Sports", "Gaming"];

  submitButtonOption = {
    text: "Submit Form",
    useSubmitBehavior: true
  }

  onSubmit = function(e) {
    notify({
      message: "You have submitted the form",
      position: {
          my: "center top",
          at: "center top"
      }
    }, "success", 3000);

    if(this.id === 0){
    this.addStudent(this.student);
    }
    else{
      this.updateStudent(this.student,this.id-1);
    }
  }

  addStudent(myStudent) {
    let students = [];
    if(localStorage.getItem('formData')){
      students = JSON.parse(localStorage.getItem('formData'));
      students = [...students, myStudent];
    }
    else{
      students = [myStudent];
    }
    localStorage.setItem("formData",JSON.stringify(students));
  }

  updateStudent(myStudent, id) {
    let students = JSON.parse(localStorage.getItem('formData'));

    students.forEach(function(student, index) {
      if(index === id) {
        students.splice(index, 1, myStudent);
      }
    });
    localStorage.setItem("formData",JSON.stringify(students));
  }

  passCompare = () => {
    return this.form.instance.option("formData").password;
  };

  // customValidation(e) {
  //   return eMailValidator(e.value);
  // }
}
