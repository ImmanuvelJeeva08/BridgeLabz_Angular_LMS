import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Onboard } from 'src/app/model/onboard';
import { DataService } from 'src/app/service/data.service';
import { OnboardService } from 'src/app/service/onboard.service';

@Component({
  selector: 'app-onboardedcandidate',
  templateUrl: './onboardedcandidate.component.html',
  styleUrls: ['./onboardedcandidate.component.scss']
})
export class OnboardedcandidateComponent implements OnInit {

  onBoardedCandidate : FormGroup;
  bankInfo : FormGroup;
  QualificationInfo : FormGroup;
  public detailsSection: number = 0;
  public bankSection : number = 1;
  public qualifSection : number = 1;
  newOnBoardCandidate = new Onboard();
  FileImage : any;
  panImange : any;
  aadharImange : any;
  passbookImange : any;
  jwt : string;
  bankId : any;
  qualificationId : any;

  public cities: any[] = [
    {value: 'Chennai',     viewValue: 'Chennai'},
    {value: 'Karur',       viewValue: 'Karur'},
    {value: 'TirunelVeli', viewValue: 'TirunelVeli'},
    {value: 'Tutucorin',   viewValue: 'Tutucorin'},
  ];

  public bankList : any[] = [
    {value : "SBI",               viewValue : "SBI"},
    {value : "IndianBank",        viewValue : "IndianBank"},
    {value : "IndianOverseaBank", viewValue : "IndianOverseaBank"},
    {value : "CBI",               viewValue : "CBI"},
    {value : "AxisBank",          viewValue : "AxisBank"},
    {value : "ICICI",             viewValue : "ICICI"},
    {value : "AndhraBank",        viewValue : "AndhraBank"},
    {value : "CanaraBank",        viewValue : "CanaraBank"},
    {value : "CITIBank",          viewValue : "CITIBank"},
    {value : "DCB",               viewValue : "DCB"},
  ];

  public statusList : any[] = [
    {value: 'Active', viewValue : 'active'},
    {value: 'inactive', viewValue : 'inactive'},
  ];

  public yearOfPassList: any[] = [
    {value: '2015', viewValue: '2015'},
    {value: '2016', viewValue: '2016'},
    {value: '2017', viewValue: '2017'},
    {value: '2018', viewValue: '2018'},
    {value: '2019', viewValue: '2019'},
    {value: '2020', viewValue: '2020'},
    {value: '2021', viewValue: '2021'},
  ];

  public qualificationList: any[] = [
    {value: 'B.E',  viewValue: 'B.E'},
    {value: 'M.E',  viewValue: 'M.E'},
    {value: 'B.Sc', viewValue: 'B.Sc'},
    {value: 'M.Sc', viewValue: 'M.Sc'},
    {value: 'M.A',  viewValue: 'M.A'},
    {value: 'M.Com', viewValue: 'M.Com'},
    {value: 'B.Com', viewValue: 'B.Com'},
  ];

  public trainingDurationList : any[] = [
    {value : "0" , viewValue : "0"},
    {value : "1" , viewValue : "1"},
    {value : "2" , viewValue : "2"},
    {value : "3" , viewValue : "3"},
    {value : "4" , viewValue : "4"},
  ];

  constructor(
    private fb : FormBuilder,
    private matSnackBar : MatSnackBar,
    private onBoardedService : OnboardService,
    private router : Router,
    private route : ActivatedRoute,
    private dataService : DataService,
  ) { 
    this.onBoardedCandidate = this.fb.group({
      firstName            : new FormControl('',[ Validators.required ,Validators.pattern("^[A-Z][a-zA-z\\s]{2,}$")]),
      middleName           : new FormControl('',[ Validators.required ,Validators.pattern("^[A-Z][a-zA-z\\s]{2,}$")]),
      lastName             : new FormControl('',[ Validators.required ,Validators.pattern("^[A-Z][a-zA-z\\s]{2,}$")]),
      email                : new FormControl('',Validators.required),
      mobileNum            : new FormControl('',[ Validators.required, Validators.pattern("^[0-9]{10}$")]),
      hiredCity            : new FormControl('',Validators.required),
      parentName           : new FormControl('',[ Validators.required ,Validators.pattern("^[A-Z][a-zA-z\\s]{2,}$")]),
      parentMobile         : new FormControl('',[ Validators.required, Validators.pattern("^[0-9]{10}$")]),
      temporaryAddress     : new FormControl('',Validators.required),
      parentOccupation     : new FormControl('',Validators.required),
      parentAnnualSalary   : new FormControl('',Validators.required),
      permanentAddress     : new FormControl('',Validators.required),
      profileImage         : new FormControl('',Validators.required),
      status               : new FormControl('',Validators.required),
      creatorStamp         : new FormControl(''),
      updateStamp          : new FormControl(),
      bankInfo             : new FormControl(),
      qualificationInfo    : new FormControl(),
    })
    this.bankInfo = this.fb.group({
      panNumber         : new FormControl('',[ Validators.required ,Validators.pattern("^[A-Z]{5}[0-9]{4}[A-Z]{1}$")]),
      aadharNumber      : new FormControl('',[ Validators.required ,Validators.pattern("^[0-9]{12}$")]),
      bankName          : new FormControl('',Validators.required),
      bankAccountNumber : new FormControl('',[ Validators.required ,Validators.pattern("^[0-9]{11}$")]),
      ifscCode          : new FormControl('',[ Validators.required ,Validators.pattern("^[A-Z]{4}[0-9]{7}$")]),
      passbookPath      : new FormControl(),
      panPath           : new FormControl(),
      aadharPath        : new FormControl(),
      creatorStamp      : new FormControl(),
      updateStamp       : new FormControl(),
    })
    this.QualificationInfo = this.fb.group({
      diploma           : new FormControl(),
      degree            : new FormControl('',Validators.required),
      field             : new FormControl('',Validators.required),
      yearOfPassing     : new FormControl('',Validators.required),
      finalPercentage   : new FormControl('',Validators.required),
      aggrPercentage    : new FormControl('',Validators.required),
      enggCertificate   : new FormControl('',Validators.required),
      finalCertificate  : new FormControl('',Validators.required),
      trainingInstitute : new FormControl('',Validators.required),
      trainingDuration  : new FormControl('',Validators.required),
      course            : new FormControl('',Validators.required),
    })
  }

  ngOnInit(): void {
    this.jwt = localStorage.getItem('jwt');
    this.jwt = "Bearer "+this.jwt;

    if( this.route.snapshot.params['id'] != undefined){
      this.dataService.currentEmployee.subscribe(candidate=>{
        console.log(candidate);
        this.bankId = candidate.bankInfo.id;
        this.qualificationId = candidate.qualificationInfo.id;
        if(Object.keys(candidate).length !== 0){
          this.onBoardedCandidate.patchValue({
            id                   : candidate.id,
            firstName            : candidate.firstName,
            middleName           : candidate.middleName,
            lastName             : candidate.lastName,
            email                : candidate.email,
            mobileNum            : candidate.mobileNum,
            hiredCity            : candidate.hiredCity,
            parentName           : candidate.parentName,
            parentMobile         : candidate.parentMobile,
            temporaryAddress     : candidate.temporaryAddress,
            parentOccupation     : candidate.parentOccupation,
            parentAnnualSalary   : candidate.parentAnnualSalary,
            permanentAddress     : candidate.permanentAddress,
            status               : candidate.status,
            creatorStamp         : candidate.creatorStamp,
            updateStamp          : candidate.updateStamp,
            bankInfo             : candidate.bankInfo,
            qualificationInfo    : candidate.qualificationInfo,
          })
          this.bankInfo.patchValue({
            id                : candidate.bankInfo.id,
            panNumber         : candidate.bankInfo.panNumber,
            aadharNumber      : candidate.bankInfo.aadharNumber,
            bankName          : candidate.bankInfo.bankName,
            bankAccountNumber : candidate.bankInfo.bankAccountNumber,
            ifscCode          : candidate.bankInfo.ifscCode,
            creatorStamp      : candidate.bankInfo.creatorStamp,
            updateStamp       : candidate.bankInfo.updateStamp,
          })
          this.QualificationInfo.patchValue({
            id                : candidate.qualificationInfo.id,
            degree            : candidate.qualificationInfo.degree,
            field             : candidate.qualificationInfo.field,
            yearOfPassing     : candidate.qualificationInfo.yearOfPassing,
            finalPercentage   : candidate.qualificationInfo.finalPercentage,
            aggrPercentage    : candidate.qualificationInfo.aggrPercentage,
            enggCertificate   : candidate.qualificationInfo.enggCertificate,
            finalCertificate  : candidate.qualificationInfo.finalCertificate,
            trainingInstitute : candidate.qualificationInfo.trainingInstitute,
            trainingDuration  : candidate.qualificationInfo.trainingDuration,
            course            : candidate.qualificationInfo.course,
          })
          this.QualificationInfo.get('diploma').setValue(candidate.qualificationInfo.diploma);
          this.FileImage = candidate.profileImage;
          this.passbookImange = candidate.bankInfo.passbookPath;
          this.aadharImange = candidate.bankInfo.aadharPath;
          this.panImange = candidate.bankInfo.panPath;
        }
      })
    }
  }

  onSubmit(){
    if(this.route.snapshot.params['id'] != undefined){
      this.newOnBoardCandidate = this.onBoardedCandidate.value;
      this.newOnBoardCandidate.bankInfo = this.bankInfo.value;
      this.newOnBoardCandidate.qualificationInfo = this.QualificationInfo.value;
      this.newOnBoardCandidate.id = this.route.snapshot.params['id'];
      this.newOnBoardCandidate.bankInfo.id = this.bankId
      this.newOnBoardCandidate.qualificationInfo.id = this.qualificationId;
      this.newOnBoardCandidate.profileImage = this.FileImage;
      this.newOnBoardCandidate.bankInfo.panPath = this.panImange;
      this.newOnBoardCandidate.bankInfo.aadharPath = this.aadharImange;
      this.newOnBoardCandidate.bankInfo.passbookPath = this.passbookImange;
      console.log(this.newOnBoardCandidate);
      this.onBoardedService.editOnboardCandidate(this.newOnBoardCandidate,this.jwt).subscribe(data=>{
        console.log(data);
          this.matSnackBar.open('Sucessfully Updated','OK',{
            duration : 3000
          })
          this.router.navigateByUrl("/displayAllOnboard");
      })
    }else{
      console.log("Submit");
      this.newOnBoardCandidate = this.onBoardedCandidate.value;
      this.newOnBoardCandidate.bankInfo = this.bankInfo.value;
      this.newOnBoardCandidate.qualificationInfo = this.QualificationInfo.value;
      this.newOnBoardCandidate.profileImage = this.FileImage;
      this.newOnBoardCandidate.bankInfo.aadharPath = this.aadharImange;
      this.newOnBoardCandidate.bankInfo.panPath = this.panImange;
      this.newOnBoardCandidate.bankInfo.passbookPath = this.passbookImange;
      console.log(this.newOnBoardCandidate);
      this.onBoardedService.addNewOnboardCandidate(this.newOnBoardCandidate,this.jwt).subscribe(data=>{
          console.log(data);
          this.matSnackBar.open('Sucessfully Added','OK',{
            duration : 3000
          })
          this.router.navigateByUrl("/home");
      })
    }
  }

  expansionBank(){
    this.detailsSection = 1;
    this.bankSection = 0;
  }

  expansionQualification(){
    this.qualifSection = 0;
    this.bankSection = 1;
  }

  backDetailsSection(){
    this.detailsSection = 0;
    this.bankSection = 1;
  }

  backBankSection(){
    this.bankSection = 0;
    this.qualifSection = 1;
  }

  onSelectedImage(event : any){
    this.FileImage = event.target.files[0];
    console.log(this.FileImage);
    var reader = new FileReader();
    reader.onload = (event:any) => { 
      this.FileImage = reader.result;
    console.log(this.FileImage);
    }    
    reader.readAsDataURL(this.FileImage);
  }

  onSelectedPanImage(event : any){
    this.panImange = event.target.files[0];
    var reader = new FileReader();
    reader.onload = (event:any) => { 
      this.panImange = reader.result;
    console.log(this.panImange);
    }    
    reader.readAsDataURL(this.panImange);
  }

  onSelectedAadharImage(event : any){
    this.aadharImange = event.target.files[0];
    var reader = new FileReader();
    reader.onload = (event:any) => { 
      this.aadharImange = reader.result;
    console.log(this.aadharImange);
    }    
    reader.readAsDataURL(this.aadharImange);
  }

  onSelectedPassbookImage(event : any){
    this.passbookImange = event.target.files[0];
    var reader = new FileReader();
    reader.onload = (event:any) => { 
      this.passbookImange = reader.result;
    console.log(this.passbookImange);
    }    
    reader.readAsDataURL(this.passbookImange);
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.onBoardedCandidate.controls[controlName].hasError(errorName);
  }

  public checkErrorBank = (controlName: string, errorName: string) => {
    return this.bankInfo.controls[controlName].hasError(errorName);
  }

  public checkErrorQualification = (controlName: string, errorName: string) => {
    return this.QualificationInfo.controls[controlName].hasError(errorName);
  }
}
