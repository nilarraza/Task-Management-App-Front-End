import { Task } from './../../Model/task';
import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from 'src/app/Service/task-service.service';
import { error } from 'util';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Service/user-service.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  task:Task={
    title:'',
    description:'',
    date:'',
    time:''
  }

  err:any

  constructor(private taskService:TaskServiceService,private router:Router,private userService:UserServiceService) { }

  ngOnInit() {
  }

  sendTask(){
    this.taskService.createTask(this.task).subscribe(
      response => {
        alert("Successfully Created")
        this.router.navigate(['user/today'])
      },
      error =>{
        this.err=error
        this.userService.verifytoken(this.err)
      }

    )
  }

}
