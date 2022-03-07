import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {

  emailId : string;
  admin = new Admin();

  constructor(
    private adminService : AdminService,
    private matSnackBar : MatSnackBar,
    private router : Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.emailId);
    this.admin.emailId = this.emailId;
    if(this.emailId != undefined){
        localStorage.setItem('emailid',this.emailId);
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
    }else {
          this.matSnackBar.open("Email ID was Empty...Please Enter valid EmailId...",'OK',{
            duration : 3000
          })
    }
  }

}
