import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from 'src/app/Service/task-service.service';
import { UserServiceService } from 'src/app/Service/user-service.service';

@Component({
  selector: 'app-upcoming-task',
  templateUrl: './upcoming-task.component.html',
  styleUrls: ['./upcoming-task.component.css']
})
export class UpcomingTaskComponent implements OnInit {

  tasks:any;
  htext=false;
  message = '';
  err:any
  moveform=false
  udate:String
  taskId:number
  constructor(private taskService:TaskServiceService,private userService:UserServiceService) { }

  ngOnInit() {
    this.taskService.getUpcomingTask().subscribe(
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
