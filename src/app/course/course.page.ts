import { Component, OnInit } from '@angular/core';
import { CourseProvider } from '../../provider/course.provider';
import { Course } from '../../model/course.model';
import { ModalController } from '@ionic/angular';
import { CourseEditPage } from './modal-edit/course-edit.page';

@Component({
    selector: 'app-course',
    templateUrl: 'course.page.html',
    styleUrls: ['course.page.scss'],
    providers: [CourseProvider]
})
export class CoursePage implements OnInit {

    public courses: Course[];

    public items: Array<{ title: string; note: string; icon: string }> = [];
    constructor(
        public courseProvider: CourseProvider,
        public modalController: ModalController) {

    }

    public getCourses() {
        this.courseProvider.getCourses()
            .subscribe(res => {
                this.courses = res as Array<Course>;
            })
    }

    public refresh() {
        this.courses = new Array<Course>();
        this.getCourses();
    }

    public async addCourse() {
        const modal = await this.modalController.create({
            component: CourseEditPage
        });
        return await modal.present();
    }

    public async editCourse(course:Course) {
        course.image = 0;

        const modal = await this.modalController.create({
            component: CourseEditPage,
            componentProps: {
                course: course,
             }
        });
        return await modal.present();
    }

   

    ngOnInit() {
        this.getCourses();
    }

}
