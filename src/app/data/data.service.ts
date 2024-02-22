import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class DataService {

  private data: string[] = ['Data 1', 'Data 2', 'Data 3'];
  private dataSubject: Subject<string[]> = new Subject<string[]>();

  constructor() {
    // Emit initial data when the service is initialized
    this.dataSubject.next(this.data);
    console.log('services loaded...');
  }

  // Method to get data as an Observable
  getData(): Observable<string[]> {
    return this.dataSubject.asObservable();
  }

  // Method to update data and notify subscribers
  updateData(newData: string[]): void {
    this.data = newData;
    this.dataSubject.next(this.data);
  }
}
