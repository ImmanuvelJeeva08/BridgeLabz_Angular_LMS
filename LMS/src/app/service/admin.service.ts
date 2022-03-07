import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  constructor(
    private http : HttpClient,
  ) { }

  baseURL : string = "http://localhost:8080/"

  addNewAdmin(newAdmin : Admin): Observable<any> {
    return this.http.post(this.baseURL + "admin", newAdmin);
  }

  login(value: any) : Observable<any> {
    return this.http.post(this.baseURL + "authenticate", value);
  }

  otpVerification(otp: any): Observable<any>{
    return this.http.post(this.baseURL + "otp" , otp);
  }

  forgetPassword(emailId: any) : Observable<any>{
    console.log(emailId);
    return this.http.post(this.baseURL + "forgotPassword" , emailId);
  }

  resetPassword(newPassword : any) : Observable<any> {
    return this.http.post(this.baseURL + "resetPassword" , newPassword);
  }
}
