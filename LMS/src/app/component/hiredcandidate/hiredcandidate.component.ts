import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Hired } from 'src/app/model/hired';
import { DataService } from 'src/app/service/data.service';
import { HiredService } from 'src/app/service/hired.service';

@Component({
  selector: 'app-hiredcandidate',
  templateUrl: './hiredcandidate.component.html',
  styleUrls: ['./hiredcandidate.component.scss']
})
export class HiredcandidateComponent implements OnInit {

  hiredCandidate : FormGroup;
  newHired = new Hired();
  jwt :string;
  onboardStatus = false;

  public qualificationList: any[] = [
    {value: 'B.E',   viewValue: 'B.E'},
    {value: 'M.E',   viewValue: 'M.E'},
    {value: 'B.Sc',  viewValue: 'B.Sc'},
    {value: 'M.Sc',  viewValue: 'M.Sc'},
    {value: 'M.A',   viewValue: 'M.A'},
    {value: 'M.Com', viewValue: 'M.Com'},
    {value: 'B.Com', viewValue: 'B.Com'},
  ];

  public remarkList : any[] = [
    { value : "Medium",    viewValue : "Medium"},
    { value : "Good",      viewValue : "Good"},
    { value : "Excellent", viewValue : "Excellent"},
  ];

  constructor(
    private fb : FormBuilder,
    private hiredService : HiredService,
    private matSnackBar : MatSnackBar,
    private router : Router,
    private dataService : DataService,
    private route : ActivatedRoute,
  ) { 
    this.hiredCandidate = this.fb.group({
      firstName            : new FormControl('',[ Validators.required ,Validators.pattern("^[A-Z][a-zA-z\\s]{2,}$")]),
      middleName           : new FormControl('',[ Validators.required ,Validators.pattern("^[A-Z][a-zA-z\\s]{2,}$")]),
      lastName             : new FormControl('',[ Validators.required ,Validators.pattern("^[A-Z][a-zA-z\\s]{2,}$")]),
      email                : new FormControl('',[ Validators.required ,Validators.pattern("^[a-z0-9]{2,}[@][a-z]{5}[.][a-z]{3}$")]),
      mobileNum            : new FormControl('',[ Validators.required, Validators.pattern("^[0-9]{10}$")]),
      hiredCity            : new FormControl('',Validators.required),
      hiredDate            : new FormControl('',Validators.required),
      degree               : new FormControl('',Validators.required),
      hiredLab             : new FormControl('',Validators.required),
      attitudeRemark       : new FormControl('',Validators.required),
      communicationRemark  : new FormControl('',Validators.required),
      knowledgeRemark      : new FormControl('',Validators.required),
      onboardingStatus     : new FormControl(),
      status               : new FormControl('',Validators.required),
      creatorUser          : new FormControl('',Validators.required),
      joindate             : new FormControl('',Validators.required),
      location             : new FormControl('',Validators.required),
      aggrPer              : new FormControl('',Validators.required),
      currentPincode       : new FormControl('',Validators.required),
      permanentPincode     : new FormControl('',Validators.required),
    })
  }

  ngOnInit(): void {
    this.jwt = localStorage.getItem('jwt');
    this.jwt = "Bearer "+this.jwt;
    this.hiredCandidate.patchValue({
      onboardingStatus : false,
    })
    if(this.route.snapshot.params['id'] != undefined){
      this.dataService.currentEmployee1.subscribe(candidate=>{
        console.log(candidate);
        console.log(candidate.hiredCity);
        if(Object.keys(candidate).length !== 0){
          console.log(candidate);
          this.hiredCandidate.patchValue({
            id                   : candidate.id,
            firstName            : candidate.firstName,
            middleName           : candidate.middleName,
            lastName             : candidate.lastName,
            email                : candidate.email,
            mobileNum            : candidate.mobileNum,
            hiredCity            : candidate.hiredCity,
            hiredDate            : candidate.hiredDate,
            degree               : candidate.degree,
            hiredLab             : candidate.hiredLab,
            attitudeRemark       : candidate.attitudeRemark,
            communicationRemark  : candidate.communicationRemark,
            knowledgeRemark      : candidate.knowledgeRemark,
            onboardingStatus     : candidate.onboardingStatus,
            status               : candidate.status,
            creatorUser          : candidate.creatorUser,
            joindate             : candidate.joindate,
            location             : candidate.location,
            aggrPer              : candidate.aggrPer,
            currentPincode       : candidate.currentPincode,
            permanentPincode     : candidate.permanentPincode,
          })
        }
    })
  }

  }

  onSubmit(){
    if(this.route.snapshot.params['id'] != undefined){
      this.newHired = this.hiredCandidate.value;
      this.newHired.id = this.route.snapshot.params['id'];
      console.log(this.newHired);
       this.hiredService.editHiredCandidate(this.newHired,this.jwt).subscribe(data=>{
          console.log(data);
          this.matSnackBar.open('Sucessfully Updated...!','ok',{
            duration : 3000
          })
          this.router.navigateByUrl("/home");
        },error=>{
          this.matSnackBar.open('SomeThing went wrong! Not Updated...!','ok',{
            duration : 3000
          })
        })
    }else{
      this.newHired = this.hiredCandidate.value;
      console.log(this.newHired);
      this.hiredService.addNewHiredCandidate(this.newHired,this.jwt).subscribe(data=>{
        console.log(data);
        this.matSnackBar.open('Sucessfully Added...!','ok',{
          duration : 3000
        })
        this.router.navigateByUrl("/home");
      },error=>{
        this.matSnackBar.open('SomeThing went wrong! Not Added...!','ok',{
          duration : 3000
        })
      })
    }
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.hiredCandidate.controls[controlName].hasError(errorName);
  }

}
