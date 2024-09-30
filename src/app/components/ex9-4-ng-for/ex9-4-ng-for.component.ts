import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ex9-4-ng-for',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex9-4-ng-for.component.html',
  styleUrl: './ex9-4-ng-for.component.css'
})
export class Ex94NgForComponent implements OnInit {
  
  allProducts: string[]=[
    "Pizza",
    "Burger",
    "Pasta",
    "French Fries",
  ]
  
  constructor() { }

  ngOnInit() {  }

}
