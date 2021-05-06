import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../service/course.service';
import { Course } from '../_models/course';

@Component({
  selector: 'app-details-course',
  templateUrl: './details-course.component.html',
  styleUrls: ['./details-course.component.css']
})
export class DetailsCourseComponent implements OnInit {
  course!:Course ;
  constructor(private cService : CourseService, private ar:ActivatedRoute)  { }

  ngOnInit(): void {
    let id = 0;
    this.ar.params.subscribe(
      d=>{ id = d['id'] }   
    )
    this.cService.getdetails(id).subscribe(
      d=>this.course=d
    )

}

}
