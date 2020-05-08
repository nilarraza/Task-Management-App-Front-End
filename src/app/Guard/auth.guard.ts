import { UserServiceService } from 'src/app/Service/user-service.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(private userservice : UserServiceService,private router:Router){}

  canActivate():boolean {
    if (this.userservice.loggedIn()) {
      return true
    }else{
      this.router.navigate(['auth/login'])
      return false
    }
  }
 
  
}
