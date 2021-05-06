import { Component, OnInit } from '@angular/core';
import { Department } from '../_models/department';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService} from '../service/department.service'
@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  nDept : Department = new Department ( 0 , "" ) ;
  constructor(private deptService : DepartmentService , private route : Router) { }
  save()
  {
    this.deptService.addDept(this.nDept).subscribe(
      d=>{
        console.log(d) 
        this.route.navigate(['/departments']);
      }
    )
  }
  ngOnInit(): void {
   
  }

}
