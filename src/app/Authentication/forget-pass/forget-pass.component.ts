import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.css']
})
export class ForgetPassComponent implements OnInit {

  username='';
  htext=false;
  ftext=false;
  message='';

  constructor(private userservice : UserServiceService,private router:Router) { }

  ngOnInit() {
  }

  findUser(){
    this.userservice.findusername(this.username).subscribe(
      response =>{
      this.message="An email with password reset verfication link sent to your email account. please click the link to verify. ";
        
       this.ftext=true;
        //setTimeout(() => {  this.ftext=false; }, 5000);
        setTimeout(() => {  this.router.navigate(['auth/login']) }, 8000);
        
        
      },
      error =>{
        this.message="You don't have an account. please Sign Up";
        this.htext=true
        //setTimeout(() => {  this.htext=false; }, 5000);
        setTimeout(() => {   this.router.navigate(['auth/signup']) }, 8000);
       
      }
    )
  }

}
