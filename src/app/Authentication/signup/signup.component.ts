import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/user';
import { UserServiceService } from 'src/app/Service/user-service.service';
import { error } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

user:User = {
  username:'',
  email:'',
  password:''
}

  constructor(private userservice : UserServiceService,private router:Router) { }

  ngOnInit() {
  
  }

  sendUser(): void {

    this.userservice.signUp(this.user)
    .subscribe(
      response =>{
      // location.reload();
       alert("Successfully Registered.");
        this.router.navigate(['auth/login'])
      },
      error =>{
        alert("error");  
      }
    )
   
  }
}
