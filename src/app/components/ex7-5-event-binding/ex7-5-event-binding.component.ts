import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex7-5-event-binding',
  standalone: true,
  imports: [],
  templateUrl: './ex7-5-event-binding.component.html',
  styleUrl: './ex7-5-event-binding.component.css'
})
export class Ex75EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(){ }

  onUserClick(e: MouseEvent){
    alert(`You ${e.type} the button at (${e.clientX}, ${e.clientY})`);
  }

  onUserDoubleClick(e: MouseEvent){
    alert(`You ${e.type} the button`);
  }

}
