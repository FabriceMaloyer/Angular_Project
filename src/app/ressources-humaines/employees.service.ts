import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employeesKey = 'employees';

  constructor() {}

  getEmployees(): any[] {
    const employeesString = localStorage.getItem(this.employeesKey);
    return employeesString ? JSON.parse(employeesString) : [];
  }

  addEmployee(employee: any): void {
    const employees = this.getEmployees();
    employees.push(employee);
    localStorage.setItem(this.employeesKey, JSON.stringify(employees));
  }

  exportEmployee() : void {
    let val = JSON.parse(localStorage.getItem('data')).profiles[0].profile;

     let theJSON = JSON.stringify(this.val);
     let blob = new Blob([theJSON], { type: 'text/json' });
     let url = window.URL.createObjectURL(blob);
     let uri: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(url);
     this.downloadJsonHref = uri;
  }
}
