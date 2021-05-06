import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../service/student.service';
import { Student } from '../_models/student';

@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.css']
})
export class DetailStudentComponent implements OnInit {
  student!:Student ;
  constructor(private studentService : StudentService , private ar:ActivatedRoute)  { }

  ngOnInit(): void {
    let id = 0;
    this.ar.params.subscribe(
      d=>{ id = d['id'] }   
    )
    this.studentService.getdetails(id).subscribe(
      d=>this.student=d
    )

}
}