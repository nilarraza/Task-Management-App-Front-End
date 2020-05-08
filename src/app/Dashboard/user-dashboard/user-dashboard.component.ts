import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Service/user-service.service';
import { error } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private userservice : UserServiceService,private router:Router) { }

  ngOnInit() {
  }

  test(){
    this.userservice.test1().subscribe(
      response =>{
        alert("success test")
      },
      error=>{
        alert("error test")
      }

    )
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('username')
    localStorage.removeItem('role')
    this.router.navigate(['/auth/login'])
  }

}
