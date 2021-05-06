import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { StudentComponent } from './student/student.component';
import { DepartmentComponent } from './department/department.component';
import { DetailDepartmentComponent } from './detail-department/detail-department.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { EditDepartmentComponent} from './edit-department/edit-department.component';
import{ CourseComponent } from './course/course.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { EditCourseComponent} from './edit-course/edit-course.component';

import { DetailsCourseComponent } from './details-course/details-course.component';
const routes: Routes = [
  {path:'students', component : StudentComponent},
  {path:'student/detail/:id', component : DetailStudentComponent},
  {path:'student/add', component : AddStudentComponent},
  {path:'student/edit/:id', component : EditStudentComponent},
  {path:'departments', component : DepartmentComponent },
  {path:'department/detail/:id', component : DetailDepartmentComponent},
  {path:'department/add', component : AddDepartmentComponent},
  {path:'department/edit/:id', component : EditDepartmentComponent},
  {path:'courses', component: CourseComponent},
  {path : 'courses/add', component:AddCourseComponent },
  {path:'course/edit/:id', component : EditCourseComponent},
  {path:'course/detail/:id', component : DetailsCourseComponent},
  {path:'**', component : StudentComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
