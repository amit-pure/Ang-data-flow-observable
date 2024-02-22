import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './data.service'; 
import { Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [CommonModule],
  providers: [DataService],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent implements OnInit, OnDestroy {
  data$: Observable<string[]>= new Observable<[]>;
  private dataSubscription?: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadData();    
  }

  loadData() {
    this.data$ = this.dataService.getData(); // Assign Observable from service
    console.log(this.data$);
    //this.dataSubscription = this.data$.subscribe(); // Subscribe to changes
  }

  ngOnDestroy(): void {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe(); // Unsubscribe when component is destroyed
    }
  }
}
