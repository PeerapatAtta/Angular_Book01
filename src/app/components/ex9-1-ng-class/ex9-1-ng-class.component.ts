import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ex9-1-ng-class',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './ex9-1-ng-class.component.html',
  styleUrl: './ex9-1-ng-class.component.css'
})
export class Ex91NgClassComponent {
  status: boolean = false;

  myMethod() {
    this.status = !this.status;
  }

}
