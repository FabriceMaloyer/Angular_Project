import { Injectable } from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employeesKey = 'employees';

  constructor(private sanitizer: DomSanitizer) {}

  getEmployees(): any[] {
    const employeesString = localStorage.getItem(this.employeesKey);
    return employeesString ? JSON.parse(employeesString) : [];
  }

  addEmployee(employee: any): void {
    const employees = this.getEmployees();
    employees.push(employee);
    localStorage.setItem(this.employeesKey, JSON.stringify(employees));
  }

  exportEmployee(): void {
    const dataFromLocalStorage = localStorage.getItem(this.employeesKey);
    if (!dataFromLocalStorage) {
      console.error('No data found in local storage');
      return;
    }

    try {
      // Parse the data from local storage
      const parsedData = JSON.parse(dataFromLocalStorage);
      //   console.log(parsedData);

      // Convert the data to JSON string
      const theJSON = JSON.stringify(parsedData);
         console.log(theJSON);
      // Create a Blob containing the JSON data
      const blob = new Blob([theJSON], { type: 'application/json' });
 console.log(blob);
      // Create a URL for the Blob
      const url = URL.createObjectURL(blob);

      // Sanitize the URL
      const a = document.createElement('a');
      a.href = url;
      a.download = 'employee_data.json'; // Specify the filename

      // Programmatically trigger the download
      a.click();

      // Clean up
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error while exporting data:', error);
    }
  }

}
