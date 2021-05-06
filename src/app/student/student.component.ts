import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { Student } from '../_models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
   students : Student[]=[];
   p !:number ;
  constructor(private studentService : StudentService) { }
  delete(id:number){
    this.studentService.deleteStudent(id).subscribe(
      d=> console.log('done')
    )
  }
  ngOnInit(): void {
    this.studentService.getAll().subscribe(
      d=>{console.log(d)
         this.students = d ;
      
      }
    )
  }

}
