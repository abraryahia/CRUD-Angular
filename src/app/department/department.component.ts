import { Component, OnInit } from '@angular/core';
import { Department } from '../_models/department';
import { DepartmentService} from '../service/department.service'
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
     depts : Department[]=[];
   p !:number ;
  constructor(private deptService :DepartmentService) { }
  delete(id:number){
    this.deptService.deleteDept(id).subscribe(
      d=> console.log('done')
    )
  }
  ngOnInit(): void {
    this.deptService.getAll().subscribe(
      d=>{console.log(d)
         this.depts = d ;
      
      }
    )
  }
}
