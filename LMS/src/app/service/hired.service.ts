import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hired } from '../model/hired';

@Injectable({
  providedIn: 'root'
})
export class HiredService {
  
  baseURL : string = "http://localhost:8080/hiredCandidateSystem/"
  
  constructor(
    private http : HttpClient
  ) { }

  addNewHiredCandidate(newHired: Hired,jwt : string) : Observable<any>{
    const header= new HttpHeaders()
      .set('Authorization',jwt);
    return this.http.post(this.baseURL + "hiredCandidate", newHired, { headers: header });
  }

  getAllHiredCandidate(jwt : string) : Observable<any> {
    const header= new HttpHeaders()
      .set('Authorization',jwt);
      return this.http.get(this.baseURL + "AllhiredCandidate", { headers: header });
  }

  getHiredCandidateById(id: any,jwt : any) : Observable<any>{
    return this.http.get(this.baseURL + "hiredCandidateById" ,{
      headers: new HttpHeaders()
      .set('Authorization',jwt),
      params: new HttpParams().append('id', id),
    });
  }

  deleteHiredCandidate(id: any, jwt: string) : Observable<any>{
    return this.http.delete(this.baseURL + "hiredCandidate" ,{
      headers: new HttpHeaders()
      .set('Authorization',jwt),
      params: new HttpParams().append('id', id),
    });
  }

  editHiredCandidate(user: any, jwt: string) : Observable<any>{
    console.log(user);
    const header= new HttpHeaders()
      .set('Authorization',jwt);
    return this.http.put(this.baseURL + "hiredCandidate", user, { headers: header });
  }
}
