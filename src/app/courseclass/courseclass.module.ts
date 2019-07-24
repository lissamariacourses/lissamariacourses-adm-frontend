import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { CourseClassPage } from './courseclass.page';
import { CourseClassEditPage } from './modal-edit/courseclass-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: CourseClassPage
      }
    ])
  ],
  declarations: [CourseClassPage, CourseClassEditPage],
  entryComponents: [CourseClassEditPage]
})
export class CourseClassPageModule {}
