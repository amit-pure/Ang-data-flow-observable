import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { DataComponent } from './app/data/data.component';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DataComponent],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular      
    </a>
    <app-data></app-data>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
