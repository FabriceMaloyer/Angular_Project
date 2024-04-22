import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-gestion-calendrier',
  templateUrl: './gestion-calendrier.component.html',
  styleUrls: ['./gestion-calendrier.component.css'],
  standalone: true,
  imports: [NgFor, FormsModule,CommonModule],
})
export class GestionCalendrierComponent {
  ngOnInit(): void {


  }

  projects: any[] = [
    { name: 'Project 1' },
    { name: 'Project 2' },
    { name: 'Project 3' },
    // Add more projects as needed
  ];

  weeks: any[] = [
    { startDate: new Date(2024, 0, 1), endDate: new Date(2024, 0, 7) },
    { startDate: new Date(2024, 0, 8), endDate: new Date(2024, 0, 14) },
    { startDate: new Date(2024, 0, 15), endDate: new Date(2024, 0, 21) },
    // Add more weeks as needed
  ];

  newProject: any = { name: '' };

  addProject(): void {
    this.projects.push({ name: this.newProject.name });
    this.newProject.name = ''; // Clear input field
  }
}
