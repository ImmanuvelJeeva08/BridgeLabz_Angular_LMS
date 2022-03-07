import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input'; 
import { HttpClientModule } from '@angular/common/http';
import { MatBadgeModule, MatButtonModule, MatButtonToggleModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatExpansionModule, MatIconModule, MatMenuModule, MatRadioModule, MatSelectModule, MatSnackBarModule, MatStepperModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';
import { HiredcandidateComponent } from './component/hiredcandidate/hiredcandidate.component';
import { OnboardedcandidateComponent } from './component/onboardedcandidate/onboardedcandidate.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DisplayOnboardedComponent } from './component/display-onboarded/display-onboarded.component';
import { DisplayhiredComponent } from './component/displayhired/displayhired.component';
import { HiredprofileComponent } from './component/hiredprofile/hiredprofile.component';
import { OnboardprofileComponent } from './component/onboardprofile/onboardprofile.component';
import { OtpComponent } from './component/otp/otp.component';
import { ForgetpasswordComponent } from './component/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HiredcandidateComponent,
    OnboardedcandidateComponent,
    DisplayOnboardedComponent,
    DisplayhiredComponent,
    HiredprofileComponent,
    OnboardprofileComponent,
    OtpComponent,
    ForgetpasswordComponent,
    ResetpasswordComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonToggleModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatSelectModule,
    MatSnackBarModule,
    MatStepperModule,
    MatRadioModule,
    MatToolbarModule,
    MatMenuModule,
    MatExpansionModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatExpansionModule,
    MatCardModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
