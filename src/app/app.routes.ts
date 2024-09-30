import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Ex91NgClassComponent } from './components/ex9-1-ng-class/ex9-1-ng-class.component';
import { Ex92NgStyleComponent } from './components/ex9-2-ng-style/ex9-2-ng-style.component';
import { Ex93NgIfComponent } from './components/ex9-3-ng-if/ex9-3-ng-if.component';
import { Ex94NgForComponent } from './components/ex9-4-ng-for/ex9-4-ng-for.component';
import { Ex95NgForComponent } from './components/ex9-5-ng-for/ex9-5-ng-for.component';
import { Ex96NgSwitchComponent } from './components/ex9-6-ng-switch/ex9-6-ng-switch.component';

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
        path: 'ex9-2-ng-style',
        title: 'ex9-2-ng-style',
        component: Ex92NgStyleComponent,
    },
    {
        path: 'ex9-3-ng-if',
        title: 'ex9-3-ng-if',
        component: Ex93NgIfComponent,
    },
    {
        path: 'ex9-4-ng-for',
        title: 'ex9-4-ng-for',
        component: Ex94NgForComponent,
    },
    {
        path: 'ex9-5-ng-for',
        title: 'ex9-5-ng-for',
        component: Ex95NgForComponent,
    },
    {
        path: 'ex9-6-ng-switch',
        title: 'ex9-6-ng-switch',
        component: Ex96NgSwitchComponent,
    },
    {
        path: '**',
        redirectTo: 'home',
    }
];
