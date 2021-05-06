import { Component, OnInit } from '@angular/core';
import { Department } from '../_models/department';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService} from '../service/department.service'
@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {

  dept !: Department ;
  constructor(private deptservice : DepartmentService , private route :Router , private ar: ActivatedRoute) { }
  save(){
    this.deptservice.editDept( this.dept._id , this.dept ).subscribe(
      d=>{
         console.log(d),
        this.route.navigate(['/departments']);
      }
    )
  }
  ngOnInit(): void {
    let id = 0;
    let name = '';
    this.ar.params.subscribe(
            d => {
        id = d['id'];
        name = d['Name'];
      }
    )
    this.deptservice.getdetails(id).subscribe(
      d => this.dept = d
    )

  }

}
