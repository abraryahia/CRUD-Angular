import { Component, OnInit } from '@angular/core';
import { Department } from '../_models/department';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService} from '../service/department.service'
@Component({
  selector: 'app-detail-department',
  templateUrl: './detail-department.component.html',
  styleUrls: ['./detail-department.component.css']
})
export class DetailDepartmentComponent implements OnInit {
      dept !:Department ;
  constructor(private DeptService : DepartmentService , private ar:ActivatedRoute)  { }

  ngOnInit(): void {
    let id = 0;
    this.ar.params.subscribe(
      d=>{ id = d['id'] }   
    )
    this.DeptService.getdetails(id).subscribe(
      d=>this.dept=d
    )

}
}
