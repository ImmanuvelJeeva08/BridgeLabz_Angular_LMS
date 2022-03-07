import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Hired } from 'src/app/model/hired';
import { DataService } from 'src/app/service/data.service';
import { HiredService } from 'src/app/service/hired.service';

@Component({
  selector: 'app-displayhired',
  templateUrl: './displayhired.component.html',
  styleUrls: ['./displayhired.component.scss']
})
export class DisplayhiredComponent implements OnInit {

  jwt : string;
  public hiredPeople: Hired[]= [];
  public hiredPeopleCount: number = 0;

  constructor(
    private hiredService : HiredService,
    private route : ActivatedRoute,
    private dataService : DataService,
    private matSnackBar : MatSnackBar,
    private router : Router,
  ) { }

  ngOnInit(): void {
    this.jwt = localStorage.getItem('jwt');
    this.jwt = "Bearer "+this.jwt;

    this.hiredService.getAllHiredCandidate(this.jwt).subscribe(data=>{
      console.log(data);
      console.log(data.data);
      this.hiredPeople = data.data;
      console.log(this.hiredPeople);
      this.hiredPeopleCount = this.hiredPeople.length;
    })
  }

  remove(id : number){
    console.log(id);
    this.hiredService.deleteHiredCandidate(id,this.jwt).subscribe(data=>{
      console.log(data);
      this.matSnackBar.open('Sucessfully Deleted...','OK',{
        duration : 5000
      })
      this.ngOnInit();
    })
  }
 
  update(user: any){
    console.log(user);
    this.dataService.changeEmployee1(user);  
    this.router.navigateByUrl('/hired/' +user.id);
  }

  goToProfile(id : any){
    console.log(id);
    this.router.navigateByUrl('/profileHired/' + id);
  }
}
