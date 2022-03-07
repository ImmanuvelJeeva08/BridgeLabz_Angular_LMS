import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login : FormGroup;  

  constructor(
    private fb : FormBuilder,
    private adminService : AdminService,
    private router : Router,
    private matSnackBar : MatSnackBar
  ) { 
    this.login = this.fb.group({
      username : new FormControl(),
      password : new FormControl(),
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.login.value);
    this.adminService.login(this.login.value).subscribe(data=>{
      console.log(data);
      this.matSnackBar.open('User credentials verified Sucessfully', 'OK',{
        duration : 3000
      })
      localStorage.setItem('jwt',data.data);
      this.router.navigateByUrl("/home");
    },
    error=>{
      alert("User Credentials INVALID");
    })
  }
}
