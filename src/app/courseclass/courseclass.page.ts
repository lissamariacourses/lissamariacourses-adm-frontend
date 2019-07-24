import { Component, OnInit } from '@angular/core';
import { CourseClassProvider } from '../../provider/courseclass.provider';
import { CourseClass } from '../../model/courseclass.model';
import { ModalController } from '@ionic/angular';
import { CourseClassEditPage } from './modal-edit/courseclass-edit.page';
import { Router } from '@angular/router';

@Component({
    selector: 'app-courseClass',
    templateUrl: 'courseClass.page.html',
    styleUrls: ['courseClass.page.scss'],
    providers: [CourseClassProvider]
})
export class CourseClassPage implements OnInit {

    public coursesClasses: CourseClass[];

    course_id:String;

    public items: Array<{ title: string; note: string; icon: string }> = [];
    constructor(
        public courseClassProvider: CourseClassProvider,
        public modalController: ModalController,
        private router: Router) {

    }

    public refresh() {
        this.coursesClasses = new Array<CourseClass>();
        this.getCoursesClassesByClassId();
    }

    public async addCourseClass() {
        const modal = await this.modalController.create({
            component: CourseClassEditPage
        });
        return await modal.present();
    }

    public async editCourseClass(courseClass:CourseClass) {

        const modal = await this.modalController.create({
            component: CourseClassEditPage,
            componentProps: {
                courseClass: courseClass,
             }
        });
        return await modal.present();
    }


    ngOnInit() {

        this.course_id = (this.router.url).replace("/courseclass/", "");

        this.getCoursesClassesByClassId();
    }

    public getCoursesClassesByClassId() {
        this.courseClassProvider.getCoursesClassesByClassId(this.course_id)
        .subscribe(res => {
            this.coursesClasses = res as Array<CourseClass>;
            console.log(res);
        }, err => {
            console.log(err);
        })
    }

}
