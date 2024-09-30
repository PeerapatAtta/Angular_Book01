import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ex9-6-ng-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex9-6-ng-switch.component.html',
  styleUrl: './ex9-6-ng-switch.component.css'
})
export class Ex96NgSwitchComponent {

  randomStatus: boolean = false;
  randomNumber?: number;

  onRandom(){
    this.randomNumber = Math.floor(Math.random()*5)+1;
    this.randomStatus = true;
  }

}
