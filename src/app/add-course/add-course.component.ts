import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../service/course.service';
import { Course } from '../_models/course';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
   nCourse : Course = new Course(0,"");
  constructor(private cService : CourseService , private route : Router) { }
  add(){
      this.cService.addcourse(this.nCourse).subscribe(
        d =>{
          this.nCourse =d 
            // this.route.navigate(['/courses'])
             this.route.navigateByUrl('/courses')
        } 
      )
  }

  ngOnInit(): void {
  }

}
