import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private router:Router) { }

  intercept(req,next){
    if (this.getToken() != null) {

     req=req.clone({
      setHeaders: {
        Authorization:`Bearer ${this.getToken()}`
      }
    });
    }
    return next.handle(req)
  }

  getToken() {
    return localStorage.getItem('token')
  }

}
