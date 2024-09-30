import { Component } from '@angular/core';
import { MyDirectiveDirective } from '../../directives/my-directive.directive'; 

@Component({
  selector: 'app-ex9-7-custom-directive',
  standalone: true,
  imports: [MyDirectiveDirective],
  templateUrl: './ex9-7-custom-directive.component.html',
  styleUrl: './ex9-7-custom-directive.component.css'
})
export class Ex97CustomDirectiveComponent {

}
