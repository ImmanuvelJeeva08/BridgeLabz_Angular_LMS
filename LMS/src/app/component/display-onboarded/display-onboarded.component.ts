import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Onboard } from 'src/app/model/onboard';
import { DataService } from 'src/app/service/data.service';
import { OnboardService } from 'src/app/service/onboard.service';

@Component({
  selector: 'app-display-onboarded',
  templateUrl: './display-onboarded.component.html',
  styleUrls: ['./display-onboarded.component.scss']
})
export class DisplayOnboardedComponent implements OnInit {

  constructor(
    private onboardedService : OnboardService,
    private dataService : DataService,
    private router : Router,
    private matSnackBar : MatSnackBar,
  ) { }

  jwt : string;
  onBoardedPeople : Onboard[] = [];

  ngOnInit(): void {
    this.jwt = localStorage.getItem('jwt');
    this.jwt = "Bearer "+this.jwt;
    this.onboardedService.getAllOnboardedCandidate(this.jwt).subscribe(data=>{
        console.log(data);
        this.onBoardedPeople = data.data;
    })
  }
  
  remove(id : any){
    console.log(id);
      this.onboardedService.deleteOnBoardedCandidate(id,this.jwt).subscribe(data=>{
        console.log(data);
        this.matSnackBar.open('Sucessfully Deleted...','OK',{
          duration : 3000
        })
        this.ngOnInit();
      })
  }
 
  update(user: any){
    this.dataService.changeEmployee(user);  
    this.router.navigateByUrl('/onboard/' +user.id);
  }

  goToProfile(id : any){
    console.log(id);
    this.router.navigateByUrl('/profileOnboard/' + id);
  }

}
