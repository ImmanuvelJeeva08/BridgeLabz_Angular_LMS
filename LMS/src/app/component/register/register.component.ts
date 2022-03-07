import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  addAdmin : FormGroup;
  newAdmin = new Admin();
  profile : any;

  constructor(
    private fb : FormBuilder,
    private adminService : AdminService,
    private router : Router,
    private matSnackBar : MatSnackBar
  ) { 
    this.addAdmin = this.fb.group({
      firstName   : new FormControl(),
      lastName    : new FormControl(),
      mobile      : new FormControl(),
      emailId     : new FormControl(),
      profilePath : new FormControl(),
      status      : new FormControl(),
      password    : new FormControl(),
      creatorStamp: new FormControl(),
      updatedStamp: new FormControl(),
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.newAdmin = this.addAdmin.value;
    this.newAdmin.profilePath = this.profile;
    console.log(this.newAdmin);
        this.adminService.addNewAdmin(this.newAdmin).subscribe(data=>{
          console.log(data);
          this.matSnackBar.open('Sucessfully Send Activation link to Your Emailid, Check IT','OK',{
            duration : 3000
          })
          this.router.navigateByUrl("/login");
        })
  }

  onSelectedImage(event : any) {
    this.profile = event.target.files[0];
    var reader = new FileReader();
    reader.onload = (event:any) => { 
      this.profile = reader.result;
    }    
    reader.readAsDataURL(this.profile);
    console.log(this.profile)
  }

}
