import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { CoursePage } from './course.page';
import { CourseEditPage } from './modal-edit/course-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: CoursePage
      }
    ])
  ],
  declarations: [CoursePage, CourseEditPage],
  entryComponents: [CourseEditPage]
})
export class CoursePageModule {}
