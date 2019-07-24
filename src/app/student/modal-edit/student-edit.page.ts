import { Component, Input, OnInit } from '@angular/core';
import { NavParams, NavController, ModalController } from '@ionic/angular';
import { Student } from 'src/app/model/student.model';
import { StudentProvider } from 'src/app/provider/student.provider';

@Component({
  selector: 'student-edit',
  templateUrl: 'student-edit.page.html',
  providers: [StudentProvider]
})
export class StudentEditPage implements OnInit{
  student:Student;
  update:boolean;
  constructor(
    public navCtrl: NavController,
    private modalController: ModalController,
    public studentProvider: StudentProvider,
    public navParams: NavParams
  ) {
    
  }

  public ngOnInit() {
    this.update = false;

    this.student = new Student();
    const student = this.navParams.get('student') as Student;

    if(student != undefined) {
      this.student = student;
      this.update = true;
    }
  }

  public edit() {
    this.studentProvider.editStudent(this.student)
    .subscribe(res => {
      console.log(res);
      alert("Update Success!");
      this.closeModal();
    }, err => {
      console.log(err);
      alert("Error");
    })
  }

  public closeModal() {
    this.modalController.dismiss();
  }

}