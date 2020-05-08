import { User } from './../Model/user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthUser } from '../Model/auth-user';



@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient,private router:Router) { }

  public signUp(user:User){
    return this.http.post<User>("http://localhost:8080/auth/signUp",user)
  }

  public login(auser:AuthUser){
    return this.http.post<User>("http://localhost:8080/auth/authenticate",auser)
  }

  public test1():Observable<any>{
    return this.http.get<any>("http://localhost:8080/test")
  }

  public findusername(username: any){
    return this.http.post<User>("http://localhost:8080/auth/findme",username)
  }

  public sendPassword(password:any){
    return this.http.post<User>("http://localhost:8080/auth/resetpassword",password)
  }

  public getUsers():Observable<User[]>{
    return this.http.get<User[]>("http://localhost:8080/user/users")
  }

  
  public getAdmins():Observable<User[]>{
    return this.http.get<User[]>("http://localhost:8080/user/admins")
  }

  public blockUser(userid:number){
    return this.http.post<User>("http://localhost:8080/user/blockuser",userid)
  }

  public getBlockedUser():Observable<User[]>{
    return this.http.get<User[]>("http://localhost:8080/user/getblockeduser")
  }

  public unblockUser(userid:number){
    return this.http.post<User>("http://localhost:8080/user/unblockuser",userid)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  verifytoken(error : any){
    if (error instanceof HttpErrorResponse) {
      if (error.status === 401 || error.status === 403) {
        localStorage.removeItem('token');
        localStorage.removeItem('username')
        localStorage.removeItem('role')
        this.router.navigate(['/auth/login'])
      }
    }
  }
 
}
