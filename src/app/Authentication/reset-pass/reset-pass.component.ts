import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.css']
})
export class ResetPassComponent implements OnInit {

  passwordreset='';
  message='';
  htext=false;
  stext=false;
  constructor(private userservice : UserServiceService,private router:Router) { }

  ngOnInit() {
  }

  sendPass(){
    this.userservice.sendPassword(this.passwordreset).subscribe(
      response =>{
        this.message="Your new password is updated"
        this.stext=true;
        setTimeout(() => {  this.router.navigate(['auth/login']) }, 5000);
      },
      error =>{
        this.message="Something went wrong. You are not allowed to change the password."
        this.htext=true;
        setTimeout(() => {  this.router.navigate(['auth/login']) }, 5000);
      }
    )
  }

}
