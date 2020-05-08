import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Service/user-service.service';

@Component({
  selector: 'app-admin-admins',
  templateUrl: './admin-admins.component.html',
  styleUrls: ['./admin-admins.component.css']
})
export class AdminAdminsComponent implements OnInit {

  admins:any
  err:any
  constructor(private userService:UserServiceService) { }

  ngOnInit() {

    this.userService.getAdmins().subscribe(
      response =>{
        this.admins=response
      },
      error =>{
        alert("Error")
        this.err=error
        this.userService.verifytoken(this.err)
      }
    )

  }

}
