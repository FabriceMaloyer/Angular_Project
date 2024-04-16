// ressources-humaines.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-ressources-humaines',
    templateUrl: './ressources-humaines.component.html',
    styleUrls: ['./ressources-humaines.component.css']
})
export class RessourcesHumainesComponent implements OnInit {
    employees: any[] = []; // Tableau pour stocker les employés

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.http.get('assets/employees.json').subscribe((data: any) => {
            this.employees = data;
        });
    }
}
