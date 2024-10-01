import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex7-4-even-binding',
  standalone: true,
  imports: [],
  templateUrl: './ex7-4-even-binding.component.html',
  styleUrl: './ex7-4-even-binding.component.css'
})
export class Ex74EvenBindingComponent implements OnInit {

  studentName: string = '';
  score: number = 0;
  testText: string = 'This is a book';

  constructor() { }

  ngOnInit(){ 
    this.studentName = 'Smith';
    this.score = 70;
  }

  onUserAction(){
    console.log('User click the button from webpage!');
  }

}
