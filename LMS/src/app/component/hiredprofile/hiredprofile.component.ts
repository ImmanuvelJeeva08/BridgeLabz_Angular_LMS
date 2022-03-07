import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hired } from 'src/app/model/hired';
import { HiredService } from 'src/app/service/hired.service';

@Component({
  selector: 'app-hiredprofile',
  templateUrl: './hiredprofile.component.html',
  styleUrls: ['./hiredprofile.component.scss']
})
export class HiredprofileComponent implements OnInit {

  id : any;
  jwt : string;
  hiredCandidate = new Hired();

  constructor(
    private route : ActivatedRoute,
    private hiredService : HiredService,
  ) { }

  ngOnInit(): void {

    this.jwt = localStorage.getItem('jwt');
    this.jwt = "Bearer "+this.jwt;
    if(this.route.snapshot.params['id'] != undefined){
      this.id = this.route.snapshot.params['id'];
        this.hiredService.getHiredCandidateById(this.id,this.jwt).subscribe(data=>{
          console.log(data);
          this.hiredCandidate = data.data;
        })
    }
  }

}
