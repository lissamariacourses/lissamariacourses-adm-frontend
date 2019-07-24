import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'student',
    loadChildren: './student/student.module#StudentPageModule'
  },
  {
    path: 'course',
    loadChildren: './course/course.module#CoursePageModule'
  },
  {
    path: 'courseclass',
    loadChildren: './courseclass/courseclass.module#CourseClassPageModule'
  },
  {
    path: 'courseclass/:id',
    loadChildren: './courseclass/courseclass.module#CourseClassPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
