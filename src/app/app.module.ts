import { TokenInterceptorService } from './Service/token-interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Authentication/login/login.component';
import { SignupComponent } from './Authentication/signup/signup.component';
import { AuthComponent } from './Authentication/auth/auth.component';
import {FormsModule} from '@angular/forms'
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'
import { from } from 'rxjs';
import { UserDashboardComponent } from './Dashboard/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './Dashboard/admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './Guard/auth.guard';
import { ForgetPassComponent } from './Authentication/forget-pass/forget-pass.component';
import { ResetPassComponent } from './Authentication/reset-pass/reset-pass.component';
import { CreateTaskComponent } from './Dashboard/create-task/create-task.component';
import { TodayTaskComponent } from './Dashboard/today-task/today-task.component';
import { PastTaskComponent } from './Dashboard/past-task/past-task.component';
import { UpcomingTaskComponent } from './Dashboard/upcoming-task/upcoming-task.component';
import { AdminUsersComponent } from './Dashboard/admin-users/admin-users.component';
import { AdminBlockedUsersComponent } from './Dashboard/admin-blocked-users/admin-blocked-users.component';
import { AdminAdminsComponent } from './Dashboard/admin-admins/admin-admins.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AuthComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    ForgetPassComponent,
    ResetPassComponent,
    CreateTaskComponent,
    TodayTaskComponent,
    PastTaskComponent,
    UpcomingTaskComponent,
    AdminUsersComponent,
    AdminBlockedUsersComponent,
    AdminAdminsComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard,
    {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
