import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Ex91NgClassComponent } from './components/ex9-1-ng-class/ex9-1-ng-class.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'home',
        title: 'Home',
        component: HomeComponent,
    },    
    {
        path: 'ex9-1-ng-class',
        title: 'ex9-1-ng-class',
        component: Ex91NgClassComponent,
    },
    {
        path: '**',
        redirectTo: 'home',
    }
];
