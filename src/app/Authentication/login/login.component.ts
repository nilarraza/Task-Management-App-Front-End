
import { Component, OnInit } from '@angular/core';
import { AuthUser } from 'src/app/Model/auth-user';
import { UserServiceService } from 'src/app/Service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:AuthUser = {
    username:'',
    password:''
  }


  htext=false;
  message = '';

  res:any;

  constructor(private userservice : UserServiceService,private router:Router) { }

  ngOnInit() {
  }

  public sendAuth():void{

    this.userservice.login(this.user).subscribe(
      response =>{
        //alert("success");
        this.res=response;
        localStorage.setItem('token',this.res.jwt);
        localStorage.setItem('username',this.res.user.username)
        localStorage.setItem('role',this.res.user.authorities[0].authority)

        if (this.res.user.authorities[0].authority=="USER") {
          //alert("url nav")
          this.router.navigate(['/user/today'])

        }
        else if (this.res.user.authorities[0].authority=="ADMIN"){
          this.router.navigate(['/admin/users'])
        }
       //alert(this.res.user.username)
       //alert(this.res.user.authorities[0].authority)
       //alert(response);
  
      },
      error =>{
        //alert("error");  
        this.message="Your username or password is incorrect"
        this.htext=true
      }

    )
  }

}
