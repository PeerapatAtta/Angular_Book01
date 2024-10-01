import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex7-6-even-binding',
  standalone: true,
  imports: [],
  templateUrl: './ex7-6-even-binding.component.html',
  styleUrl: './ex7-6-even-binding.component.css'
})
export class Ex76EvenBindingComponent implements OnInit {

  myName: string = '';
  myClassRoom: string = '';
  myAddress: string = '';
  myImage?: string;
  myShowHide: boolean = true;
  myButtonName: string = 'Hide';

  constructor() { }

  ngOnInit(){ 
    this.myName = 'Jane Doe';
    this.myImage = 'https://i.pravatar.cc/300/2';
    this.myClassRoom = 'Angular 101';
    this.myAddress = '123 Main St, Anytown, USA';
  }

  myMethod(){
    this.myShowHide = !this.myShowHide;
  }



}
