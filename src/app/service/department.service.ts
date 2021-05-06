import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../_models/department'
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  constructor( private http  : HttpClient ) { }
  getAll()
  {
    return this.http.get<Department[]>("http://localhost:3000/Departments/list")
  }

  getdetails(id : number ){
    return this.http.get<Department>('http://localhost:3000/Departments/details/'+id)
  }
  addDept(dept : Department){
   return this.http.post<Department>('http://localhost:3000/Departments/add/',dept)

  }
  editDept( id:number ,dept :Department){
    return this.http.post<Department>('http://localhost:3000/Departments/edit/'+id , dept)
  }
  deleteDept(id: number) {
    return this.http.get("http://localhost:3000/Departments/delete/" + id)
  }

}
