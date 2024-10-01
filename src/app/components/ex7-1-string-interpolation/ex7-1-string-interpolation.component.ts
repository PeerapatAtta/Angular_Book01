import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex7-1-string-interpolation',
  standalone: true,
  imports: [],
  templateUrl: './ex7-1-string-interpolation.component.html',
  styleUrl: './ex7-1-string-interpolation.component.css'
})
export class Ex71StringInterpolationComponent implements OnInit {

  myName: string = '';
  myScore: number = 0;
  myImage?: string;

  constructor() { }
  ngOnInit(){ 
    this.myName = 'John';
    this.myScore = 100;
    this.myImage = "https://i.pravatar.cc/300/1";
  }

}
