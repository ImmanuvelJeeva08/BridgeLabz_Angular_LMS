import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Onboard } from '../model/onboard';

@Injectable({
  providedIn: 'root'
})
export class OnboardService {
  
  baseURL : string = "http://localhost:8080/onboardedCandidateSystem/"

  constructor(
    private http : HttpClient
  ) { }

  addNewOnboardCandidate(newOnBoardCandidate: Onboard, jwt : string) : Observable<any> {
    const header= new HttpHeaders()
      .set('Authorization',jwt);
    return this.http.post(this.baseURL + "onboardedCandidate", newOnBoardCandidate, { headers: header });
  }

  getAllOnboardedCandidate(jwt :string) : Observable<any>{
    const header= new HttpHeaders()
      .set('Authorization',jwt);
    return this.http.get(this.baseURL + "allOnboardedCandidate", { headers: header });
  }

  editOnboardCandidate(newOnBoardCandidate: Onboard, jwt: string) : Observable<any> {
    const header= new HttpHeaders()
      .set('Authorization',jwt);
    return this.http.put(this.baseURL + "OnboardedCandidate", newOnBoardCandidate, { headers: header });
  }

  deleteOnBoardedCandidate(id: any, jwt: string) : Observable<any> {
    const header= new HttpHeaders()
      .set('Authorization',jwt);
    return this.http.delete(this.baseURL + "OnboardedCandidate", {
      headers: new HttpHeaders()
      .set('Authorization',jwt),
      params: new HttpParams().append('id', id),
    });
  }

  getOnboardCandidateById(id: any, jwt: string) {
    return this.http.get(this.baseURL + "OnboardedCandidateById" ,{
      headers: new HttpHeaders()
      .set('Authorization',jwt),
      params: new HttpParams().append('id', id),
    });
  }

}
