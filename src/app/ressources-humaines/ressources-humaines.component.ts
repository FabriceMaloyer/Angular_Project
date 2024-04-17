// ressources-humaines.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from './employees.service';

@Component({
  selector: 'app-ressources-humaines',
  templateUrl: './ressources-humaines.component.html',
  styleUrls: ['./ressources-humaines.component.css'],
  standalone: true,
  imports: [NgFor, FormsModule],
})
export class RessourcesHumainesComponent implements OnInit {
  employees: any[] = []; // Tableau pour stocker les employés
  newEmployee: any = { firstName: '', lastName: '' };

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees(): void {
        this.employees = this.employeeService.getEmployees();
    }

    addEmployee(): void {
        this.employeeService.addEmployee(this.newEmployee);
        this.newEmployee = { firstName: '', lastName: '' }; // Clear form
        this.fetchEmployees(); // Refresh employee list
    }

}
