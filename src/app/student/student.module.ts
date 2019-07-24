import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { StudentPage } from './student.page';
import { StudentEditPage } from './modal-edit/student-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: StudentPage
      }
    ])
  ],
  declarations: [StudentPage, StudentEditPage],
  entryComponents: [StudentEditPage]
})
export class StudentPageModule {}
