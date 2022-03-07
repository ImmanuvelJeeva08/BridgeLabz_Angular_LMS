import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hired } from '../model/hired';
import { Onboard } from '../model/onboard';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  employeeSource = new BehaviorSubject(new Onboard());

  employeeSource1 = new BehaviorSubject(new Hired());
  
  currentEmployee = this.employeeSource.asObservable();

  currentEmployee1 = this.employeeSource1.asObservable();

  constructor() { }

  changeEmployee(candidate: Onboard) {
    this.employeeSource.next(candidate);
  }

  changeEmployee1(candidate: Hired) {
    this.employeeSource1.next(candidate);
  }
}
