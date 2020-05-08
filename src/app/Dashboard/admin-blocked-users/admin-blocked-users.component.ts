import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Service/user-service.service';

@Component({
  selector: 'app-admin-blocked-users',
  templateUrl: './admin-blocked-users.component.html',
  styleUrls: ['./admin-blocked-users.component.css']
})
export class AdminBlockedUsersComponent implements OnInit {

  users:any
  err:any
  constructor(private userService:UserServiceService) { }

  ngOnInit() {
    this.userService.getBlockedUser().subscribe(
      response =>{
        this.users=response
      },
      error =>{
        this.err=error
        this.userService.verifytoken(this.err)
      }
    )
  }

  unblock(userid:number){
    this.userService.unblockUser(userid).subscribe(
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
