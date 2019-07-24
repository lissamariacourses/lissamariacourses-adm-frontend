import { Component, OnInit } from '@angular/core';
import { StudentProvider } from '../../provider/student.provider';
import { Student } from '../../model/student.model';
import { ModalController } from '@ionic/angular';
import { StudentEditPage } from './modal-edit/student-edit.page';

@Component({
    selector: 'app-student',
    templateUrl: 'student.page.html',
    styleUrls: ['student.page.scss'],
    providers: [StudentProvider]
})
export class StudentPage implements OnInit {

    public students: Student[];

    public items: Array<{ title: string; note: string; icon: string }> = [];
    constructor(
        public studentProvider: StudentProvider,
        public modalController: ModalController) {

    }

    public getStudents() {
        this.studentProvider.getStudents()
            .subscribe(res => {
                this.students = res as Array<Student>;
            })
    }

    public refresh() {
        this.students = new Array<Student>();
        this.getStudents();
    }

    public async addStudent() {
        const modal = await this.modalController.create({
            component: StudentEditPage
        });
        return await modal.present();
    }

    public async editStudent(student:Student) {
        const modal = await this.modalController.create({
            component: StudentEditPage,
            componentProps: {
                student: student,
             }
        });
        return await modal.present();
    }

    ngOnInit() {
        this.getStudents();
    }

}
