import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayOnboardedComponent } from './component/display-onboarded/display-onboarded.component';
import { DisplayhiredComponent } from './component/displayhired/displayhired.component';
import { ForgetpasswordComponent } from './component/forgetpassword/forgetpassword.component';
import { HiredcandidateComponent } from './component/hiredcandidate/hiredcandidate.component';
import { HiredprofileComponent } from './component/hiredprofile/hiredprofile.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { OnboardedcandidateComponent } from './component/onboardedcandidate/onboardedcandidate.component';
import { OnboardprofileComponent } from './component/onboardprofile/onboardprofile.component';
import { OtpComponent } from './component/otp/otp.component';
import { RegisterComponent } from './component/register/register.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';


const routes: Routes = [
  {path: '', redirectTo : "/login", pathMatch :'full'},
  {path : "admin", component: RegisterComponent},
  {path : "login", component : LoginComponent},
  {path : "home", component : HomeComponent},
  {path : "hired", component : HiredcandidateComponent},
  {path : "hired/:id", component : HiredcandidateComponent},
  {path : "onboard", component : OnboardedcandidateComponent},
  {path : "onboard/:id", component : OnboardedcandidateComponent},
  {path : "profileHired", component : HiredprofileComponent},
  {path : "profileHired/:id", component : HiredprofileComponent},
  {path : "profileOnboard/:id", component : OnboardprofileComponent},
  {path : "displayAllHired", component : DisplayhiredComponent},
  {path : "displayAllOnboard", component : DisplayOnboardedComponent},
  {path : "otp" , component : OtpComponent},
  {path : "forgetpassword" , component : ForgetpasswordComponent},
  {path : "resetpassword" , component : ResetpasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
