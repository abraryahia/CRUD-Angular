import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../service/course.service';
import { Course } from '../_models/course';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  c !: Course ;
  constructor(private cservice : CourseService , private route :Router , private ar: ActivatedRoute) { }
  save(){
    this.cservice.editc(this.c._id , this.c).subscribe(
      d=>{
         console.log(d),
        this.route.navigate(['/students']);
      }
    )
  }
  ngOnInit(): void {
    let id = 0;
    let name = '';
    let email = '';
    this.ar.params.subscribe(
            d => {
        id = d['id'];
        name = d['Name'];
        email = d['Email'];
      }
    )
    this.cservice.getdetails(id).subscribe(
      d => this.c = d
    )

  }

}
