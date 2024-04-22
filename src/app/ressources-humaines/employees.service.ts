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
    const dataFromLocalStorage = localStorage.getItem('data');
    if (!dataFromLocalStorage) {
      console.error('No data found in local storage');
      return;
    }

    try {
      // Parse the data from local storage
      const parsedData = JSON.parse(dataFromLocalStorage);

      // Assuming the structure is profiles[0].profile, adjust this according to your data structure
      const val = parsedData.profiles && parsedData.profiles[0] ? parsedData.profiles[0].profile : null;

      if (!val) {
        console.error('Profile data not found in parsed data');
        return;
      }

      // Convert the data to JSON string
      const theJSON = JSON.stringify(val);

      // Create a Blob containing the JSON data
      const blob = new Blob([theJSON], { type: 'text/json' });

      // Create a URL for the Blob
      const url = window.URL.createObjectURL(blob);

      // Sanitize the URL
      const uri: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(url);

      // Create a download link
      const downloadLink = document.createElement('a');
      downloadLink.href = uri.toString();
      downloadLink.download = 'employee_data.json'; // Specify the filename
      downloadLink.click();

    } catch (error) {
      console.error('Error while exporting data:', error);
    }
  }

}
