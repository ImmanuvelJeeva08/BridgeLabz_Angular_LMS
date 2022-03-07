import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {

  first : any = "";
  second : any = "";
  third : any = "";
  four : any = "";
  otp : any = "";
  admin = new Admin();
  emailID : string;

  constructor(
    private adminService : AdminService,
    private matSnackBar : MatSnackBar,
    private router : Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.first);
    console.log(this.second);
    console.log(this.third);
    console.log(this.four);
    if(this.first != "" && this.second != "" && this.third != "" && this.four != "" ){
      this.otp = this.first + this.second + this.third + this.four;
      console.log(this.otp);
      this.admin.otp = this.otp;
      this.adminService.otpVerification(this.admin).subscribe(data=>{
        console.log(data);
        this.matSnackBar.open("OTP verified! Enter a new Password",'OK',{
          duration : 3000
        });
        this.router.navigateByUrl("/resetpassword");
      },error=>{
        this.matSnackBar.open("OTP Invalid! Please Enter valid OTP",'OK',{
          duration : 3000
        });
      })
    }else{
      console.log("Not Verified");
      this.matSnackBar.open('Please Enter 4 Digit Number','OK',{
        duration : 3000
      })
    }
  }

  resendOTP(){
    console.log("Resend otp");
    this.emailID = localStorage.getItem('emailid');
    this.admin.emailId = this.emailID;
    this.adminService.forgetPassword(this.admin).subscribe(data=>{
      console.log(data);
      this.matSnackBar.open("Sucessfully send 4 digit to given Email ID...",'OK',{
        duration : 3000
      })
      this.router.navigateByUrl("/otp");
    },error=>{
      this.matSnackBar.open("Account Not Found for given Email ID...",'OK',{
        duration : 3000
      })
    })
  } 
}
