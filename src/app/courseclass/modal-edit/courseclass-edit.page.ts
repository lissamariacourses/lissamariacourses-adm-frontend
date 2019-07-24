import { Component, Input, OnInit } from '@angular/core';
import { NavParams, NavController, ModalController } from '@ionic/angular';
import { CourseClass } from 'src/model/courseclass.model';
import { CourseClassProvider } from 'src/provider/courseclass.provider';
import { CourseProvider } from 'src/provider/course.provider';
import { Course } from 'src/model/course.model';

@Component({
    selector: 'courseclass-edit',
    templateUrl: 'courseclass-edit.page.html',
    providers: [CourseClassProvider, CourseProvider]
})
export class CourseClassEditPage implements OnInit {
    courseclass: CourseClass;
    update: boolean;
    courses:Course[];

    course_id:String;

    constructor(
        public navCtrl: NavController,
        private modalController: ModalController,
        public courseclassProvider: CourseClassProvider,
        public courseProvider: CourseProvider,
        public navParams: NavParams
    ) {

    }

    public ngOnInit() {
        this.update = false;

        this.courseclass = new CourseClass();
        const courseclass = this.navParams.get('courseClass') as CourseClass;

        if (courseclass != undefined) {
            this.courseclass = courseclass;
            this.update = true;
        }

        this.courseclass.course_id = this.courseclass.course_id;
        this.courseclass.description = this.courseclass.description_courseclass;
        this.courseclass.end_date = this.courseclass.end_date_courseclass;
        this.courseclass.start_date = this.courseclass.start_date_courseclass;
        this.courseclass.id = this.courseclass.id;
        this.courseclass.status = this.courseclass.status_courseclass;
        this.courseclass.title = this.courseclass.title_courseclass;

        this.course_id = this.courseclass.course_id;

        this.getCourses();

    }

    public getCourses() {
        this.courseProvider.getCourses()
            .subscribe(res => {
                console.log(res);
                this.courses = res as Array<Course>;
            }, err => {
                console.log(err);
            })
    }



    public edit() {
        this.courseclassProvider.editCourseClass(this.courseclass)
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