import { Directive, ElementRef } from '@angular/core';
@Directive({
  selector: '[appMyDirective]',
  standalone: true
})
export class MyDirectiveDirective {
  private element:HTMLInputElement;  
  constructor(private elRef: ElementRef) {
    this.element = this.elRef.nativeElement;
    this.element.style.backgroundColor = 'blue';
    this.element.style.color = 'white';
    this.element.className = "col-sm-4 pt-2 pb-3";
   }

}
