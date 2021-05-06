import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../service/student.service';
import { Student } from '../_models/student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  
  nstudent:Student = new Student ( 0 , "" ,"") ;
  constructor(private stdService : StudentService , private route : Router) { }
  save()
  {
    this.stdService.addStudent(this.nstudent).subscribe(
      d=>{
        console.log(d) 
        this.route.navigate(['/students']);
        //this.route.navigateByUrl('/students')
      }
    )
  }
  ngOnInit(): void {
   
  }

}
