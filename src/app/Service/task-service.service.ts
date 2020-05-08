import { Task } from './../Model/task';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private http:HttpClient) { }

  public createTask(tk:Task ){
    return this.http.post<Task>("http://localhost:8080/app/createtask",tk)
  }

  public getTodayTask():Observable<Task[]>{
    return this.http.get<Task[]>("http://localhost:8080/app/todaytask")
  }

  public getPastTask():Observable<Task[]>{
    return this.http.get<Task[]>("http://localhost:8080/app/pasttask")
  }

  public getUpcomingTask():Observable<Task[]>{
    return this.http.get<Task[]>("http://localhost:8080/app/upcomingtask")
  }

  public deleteTask(id:number){
    return this.http.delete<void>("http://localhost:8080/app/deletetask?id="+ id)
  }

  public sendDateMove(date:any,id:number){
      return this.http.post<Task>("http://localhost:8080/app/movetask?id="+ id,date)
  }
  
}
