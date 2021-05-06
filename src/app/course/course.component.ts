import { Component, OnInit } from '@angular/core';
import { CourseService } from '../service/course.service';
import { Course } from '../_models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
   courses : Course []=[];
   p:number = 0;
  constructor( private CSevice : CourseService) { }
  delete(id:number){
    this.CSevice.deletec(id).subscribe(
      d=> console.log('done')
    )
  }
     
  ngOnInit(): void {
      this.CSevice.getAll().subscribe(
         data => this.courses = data 
      )    
  }

}
