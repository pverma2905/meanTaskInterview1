import { Component,OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';
import {Student} from'src/app/models/student.model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  constructor(private studentService:StudentService, private fb: FormBuilder) { 
    this.studentForm = this.fb.group({
      name: ['', [Validators.required]],
     
    });
  }
  student!:Student[];
  users: any;
  studentForm: any;
  ngOnInit(): void {
    
  }

  get name(): any {
    return this.studentForm.get('name');
  }

  onSubmit() {
    this.studentService.searchStudents(this.studentForm.value).subscribe((data:any) => {
      this.student=data['result']
    })
  }
}
