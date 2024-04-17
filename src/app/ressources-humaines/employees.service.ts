// employee.service.ts
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
}
