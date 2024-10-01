import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex7-2-attribute-binding',
  standalone: true,
  imports: [],
  templateUrl: './ex7-2-attribute-binding.component.html',
  styleUrl: './ex7-2-attribute-binding.component.css'
})
export class Ex72AttributeBindingComponent implements OnInit {

  myName: string = '';
  myScore: number = 0;
  myImage?: string;
  myLink?: string;

  constructor() { }
  ngOnInit(){ 
    this.myName = 'SMith';
    this.myScore = 90;
    this.myImage = "https://i.pravatar.cc/300/1";
    this.myLink = "https://www.google.com";
  }

}