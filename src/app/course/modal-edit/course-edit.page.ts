import { Component, Input, OnInit } from '@angular/core';
import { NavParams, NavController, ModalController } from '@ionic/angular';
import { Course } from 'src/model/course.model';
import { CourseProvider } from 'src/provider/course.provider';
import { Router } from '@angular/router';

@Component({
  selector: 'course-edit',
  templateUrl: 'course-edit.page.html',
  providers: [CourseProvider]
})
export class CourseEditPage implements OnInit {
  course: Course;
  update: boolean;

  constructor(
    public navCtrl: NavController,
    private modalController: ModalController,
    public courseProvider: CourseProvider,
    public navParams: NavParams,
  ) {

  }

  public ngOnInit() {
    this.update = false;

    this.course = new Course();
    const course = this.navParams.get('course') as Course;

    if (course != undefined) {
      this.course = course;
      this.update = true;
    }

    
  }

  public edit() {
    this.courseProvider.editCourse(this.course)
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