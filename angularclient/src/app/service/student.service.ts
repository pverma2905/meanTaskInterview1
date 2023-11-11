import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Student} from "../models/student.model";


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseUrl="http://localhost:4201/api/"
  constructor(private http:HttpClient) { }
  getStudents():Observable<Object>{
    return this.http.get(this.baseUrl+'students')
  }
  searchStudents(data:any):Observable<Object>{
    return this.http.post(this.baseUrl+'search',data)
  }
}
