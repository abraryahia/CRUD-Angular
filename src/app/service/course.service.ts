import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../_models/course'

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http : HttpClient) { }
  getAll(){
   return  this.http.get<Course[]>('http://localhost:3000/Courses/list')
  }
  addcourse(course:Course){
    return this.http.post<Course>('http://localhost:3000/Courses/add' , course);
  }
  getdetails(id : number ){
    return this.http.get<Course>('http://localhost:3000/students/details/'+id)
  }
 
  editc(id:number , c:Course){
    return this.http.post<Course>('http://localhost:3000/students/edit/'+id , c)
  }
  deletec(id: number) {
    return this.http.get("http://localhost:3000/students/delete/" + id)
  }

}
