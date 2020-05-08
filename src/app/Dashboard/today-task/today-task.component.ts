import { error } from 'util';
import { UserServiceService } from './../../Service/user-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskServiceService } from 'src/app/Service/task-service.service';


@Component({
  selector: 'app-today-task',
  templateUrl: './today-task.component.html',
  styleUrls: ['./today-task.component.css']
})
export class TodayTaskComponent implements OnInit {

  tasks:any;
  htext=false;
  message = '';
  err:any
  moveform=false
  udate:String
  taskId:number

  constructor(private taskService:TaskServiceService,private router:Router,private userService:UserServiceService) { }

  ngOnInit() {
    this.taskService.getTodayTask().subscribe(
      response =>{
        this.tasks=response

        if (this.tasks===null) {
          this.message="Your task is empty"
          this.htext=true
        }
        //alert("success")
      },
      error =>{
        this.err=error
        this.userService.verifytoken(this.err)
      }
    )
  }

  deleteTask(id:number){
    this.taskService.deleteTask(id).subscribe(
      response =>{
        //alert("Successfully deleted")
        location.reload()
      },
      error =>{
        this.err=error
        this.userService.verifytoken(this.err)
      }
    )
  }

  moveFormActive(id:number){
    this.taskId=id
    this.moveform=true
  }

  moveTask(){
    // alert(this.udate+" "+this.taskId)
     this.taskService.sendDateMove(this.udate,this.taskId).subscribe(
       response =>{
         location.reload()
       },
       error =>{
         this.err=error
         this.userService.verifytoken(this.err)
       }
     )
   }

}
