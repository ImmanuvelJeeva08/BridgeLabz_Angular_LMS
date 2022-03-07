import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bankinfo } from 'src/app/model/bankinfo';
import { Onboard } from 'src/app/model/onboard';
import { Qualification } from 'src/app/model/qualification';
import { OnboardService } from 'src/app/service/onboard.service';

@Component({
  selector: 'app-onboardprofile',
  templateUrl: './onboardprofile.component.html',
  styleUrls: ['./onboardprofile.component.scss']
})
export class OnboardprofileComponent implements OnInit {

  constructor(
    private route : ActivatedRoute,
    private onboardService : OnboardService,
  ) { }

  jwt : string;
  id : any;
  onBoardCandidate = new Onboard();
  bankInfo = new Bankinfo();
  qualificationInfo = new Qualification();

  ngOnInit(): void {

    this.jwt = localStorage.getItem('jwt');
    this.jwt = "Bearer "+this.jwt;
    if(this.route.snapshot.params['id'] != undefined){
      this.id = this.route.snapshot.params['id'];
        this.onboardService.getOnboardCandidateById(this.id,this.jwt).subscribe(data=>{
          console.log(data);
          this.onBoardCandidate = Object.values(data)[0];
          this.bankInfo = this.onBoardCandidate.bankInfo;
          this.qualificationInfo= this.onBoardCandidate.qualificationInfo;
        })
    }
  }

}
