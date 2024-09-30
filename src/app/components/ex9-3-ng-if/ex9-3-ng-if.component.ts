import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-ex9-3-ng-if',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './ex9-3-ng-if.component.html',
    styleUrl: './ex9-3-ng-if.component.css'
})
export class Ex93NgIfComponent implements OnInit {
    name: string = '';
    details?: string;
    userImage?: string;
    status: boolean = false;
    customers: any[] = [
        {
            name: "Jeerawuth Varin",
            address: "123/321 Moo 1 Kanom Nakornsritammaraj",
            image: "https://i.pravatar.cc/400/200"
        },
        {
            name: "Sombat Suntareewong",
            address: "77/75 Moo 3 Pradubdown Nonthaburi",
            image: "https://i.pravatar.cc/400/200"
        },
        {
            name: "Manee Pimjan",
            address: "77/75 Moo 3 Pradubdown Nonthaburi",
            image: "https://i.pravatar.cc/400/200"
        },
        {
            name: "Supaporn Neamsiri",
            image: "https://i.pravatar.cc/400/200"
        },
        {
            name: "Aomporn Waenpej"
        },
        {
            name: "Domrong Sugaseam"
        },
    ];

    constructor() {
        let randomIndex = Math.floor(Math.random() * this.customers.length);
        let currentCustomer = this.customers[randomIndex];
        this.name = currentCustomer.name;
        this.details = currentCustomer.address;
        this.userImage = currentCustomer.image;
        if (!this.userImage) {
            this.userImage = "https://i.pravatar.cc/400/200";
        }
    }
    ngOnInit() { }
    onUserClick() {
        this.status = !this.status;
    }

}
