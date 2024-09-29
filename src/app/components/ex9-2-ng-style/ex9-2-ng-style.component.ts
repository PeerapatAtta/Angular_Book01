import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ex9-2-ng-style',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ex9-2-ng-style.component.html',
  styleUrl: './ex9-2-ng-style.component.css'
})
export class Ex92NgStyleComponent {

  colorProperty: string = '';
  r: number = 255;
  g: number = 255;
  b: number = 255;

  myMethod() {
    this.colorProperty = `rgb(${this.r}, ${this.g}, ${this.b})`;
  }

}
