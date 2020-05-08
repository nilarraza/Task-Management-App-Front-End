import { SignupComponent } from './Authentication/signup/signup.component';
import { LoginComponent } from './Authentication/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './Authentication/auth/auth.component';
import { UserDashboardComponent } from './Dashboard/user-dashboard/user-dashboard.component';
import { AuthGuard } from './Guard/auth.guard';
import { ForgetPassComponent } from './Authentication/forget-pass/forget-pass.component';
import { ResetPassComponent } from './Authentication/reset-pass/reset-pass.component';
import { CreateTaskComponent } from './Dashboard/create-task/create-task.component';
import { TodayTaskComponent } from './Dashboard/today-task/today-task.component';
import { PastTaskComponent } from './Dashboard/past-task/past-task.component';
import { UpcomingTaskComponent } from './Dashboard/upcoming-task/upcoming-task.component';
import { AdminDashboardComponent } from './Dashboard/admin-dashboard/admin-dashboard.component';
import { AdminUsersComponent } from './Dashboard/admin-users/admin-users.component';
import { AdminBlockedUsersComponent } from './Dashboard/admin-blocked-users/admin-blocked-users.component';
import { AdminAdminsComponent } from './Dashboard/admin-admins/admin-admins.component';


const routes: Routes = [
  {path:'auth',component:AuthComponent,
  children:[
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'forgetpassword',component:ForgetPassComponent},
    {path:'resetpassword',component:ResetPassComponent}
  ]
},
{path:'user',component:UserDashboardComponent,canActivate:[AuthGuard],
children:[
  {path:'task',component:CreateTaskComponent},
  {path:'today',component:TodayTaskComponent},
  {path:'past',component:PastTaskComponent},
  {path:'upcoming',component:UpcomingTaskComponent}
  ]
},
{path:'admin',component:AdminDashboardComponent,canActivate:[AuthGuard],
children:[
  {path:'users',component:AdminUsersComponent},
  {path:'blocked',component:AdminBlockedUsersComponent},
  {path:'admins',component:AdminAdminsComponent}
 
]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
