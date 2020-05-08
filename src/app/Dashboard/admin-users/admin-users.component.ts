import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Service/user-service.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  Users:any
  err:any
  constructor(private userService:UserServiceService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      response =>{
        this.Users=response
      },
      error =>{
        alert("Error")
        this.err=error
        this.userService.verifytoken(this.err)
      }
    )
  }

  block(userid:number){
    this.userService.blockUser(userid).subscribe(
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
