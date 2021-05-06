import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../_models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor( private http : HttpClient ) { }
  getAll()
  {
    return this.http.get<Student[]>("http://localhost:3000/students/list")
  }

  getdetails(id : number ){
    return this.http.get<Student>('http://localhost:3000/students/details/'+id)
  }
  addStudent(std : Student){
   return this.http.post<Student>('http://localhost:3000/students/add/',std)

  }
  editStudent(id:number , std:Student){
    return this.http.post<Student>('http://localhost:3000/students/edit/'+id , std)
  }
  deleteStudent(id: number) {
    return this.http.get("http://localhost:3000/students/delete/" + id)
  }


}
