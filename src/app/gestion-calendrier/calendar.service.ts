import { Injectable } from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  private calendarKey = 'calendar';

  constructor(private sanitizer: DomSanitizer) {}

  getCalendar(): any[] {
    const caldendarString = localStorage.getItem(this.calendarKey);
    return caldendarString ? JSON.parse(caldendarString) : [];
  }

  addEmployee(employee: any): void {
    const calendar = this.getCalendar();
    calendar.push(employee);
    localStorage.setItem(this.calendarKey, JSON.stringify(calendar));
  }
}
