import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../service/student.service';
import { Student } from '../_models/student';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  est !: Student ;
  constructor(private stdservice : StudentService , private route :Router , private ar: ActivatedRoute) { }
  save(){
    this.stdservice.editStudent(this.est._id , this.est).subscribe(
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
    this.stdservice.getdetails(id).subscribe(
      d => this.est = d
    )

  }
  }


