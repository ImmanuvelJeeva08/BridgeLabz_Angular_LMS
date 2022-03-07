import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  constructor(
    private adminService : AdminService,
    private router : Router,
    private matSnackBar : MatSnackBar,
  ) { }

  admin = new Admin();

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("NEW PASSWORD = "+this.admin.newPassword);
    this.adminService.resetPassword(this.admin).subscribe(data=>{
      console.log(data);
      this.matSnackBar.open("Sucessfully Password Changed...!",'OK',{
        duration : 3000
      })
      this.router.navigateByUrl("/login");
    })
  }
}
