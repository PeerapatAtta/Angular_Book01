import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ex9-5-ng-for',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex9-5-ng-for.component.html',
  styleUrl: './ex9-5-ng-for.component.css'
})
export class Ex95NgForComponent implements OnInit {

  customers: any[] = [
      {
          name: "Jeerawuth Varin",
          address: "123/321 Moo 1 Kanom Nakornsritammaraj",
          image: "https://i.pravatar.cc/400/200/1",
          status: false
      },
      {
          name: "Sombat Suntareewong",
          address: "77/75 Moo 3 Pradubdown Nonthaburi",
          image: "https://i.pravatar.cc/400/200/2",
          status: false
      },
      {
          name: "Manee Pimjan",
          address: "77/75 Moo 3 Pradubdown Nonthaburi",
          image: "https://i.pravatar.cc/400/200/3",
          status: false
      },
      {
          name: "Supaporn Neamsiri",
          image: "https://i.pravatar.cc/400/200/4",
          status: false
      },
      {
          name: "Aomporn Waenpej",
          image: "https://i.pravatar.cc/400/200/5",
          status: false
      },
  ];

  constructor() { }
  ngOnInit() { }

}
