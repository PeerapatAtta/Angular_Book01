import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Ex91NgClassComponent } from './components/ex9-1-ng-class/ex9-1-ng-class.component';
import { Ex92NgStyleComponent } from './components/ex9-2-ng-style/ex9-2-ng-style.component';
import { Ex93NgIfComponent } from './components/ex9-3-ng-if/ex9-3-ng-if.component';
import { Ex94NgForComponent } from './components/ex9-4-ng-for/ex9-4-ng-for.component';
import { Ex95NgForComponent } from './components/ex9-5-ng-for/ex9-5-ng-for.component';
import { Ex96NgSwitchComponent } from './components/ex9-6-ng-switch/ex9-6-ng-switch.component';
import { Ex97CustomDirectiveComponent } from './components/ex9-7-custom-directive/ex9-7-custom-directive.component';
import { Ex71StringInterpolationComponent } from './components/ex7-1-string-interpolation/ex7-1-string-interpolation.component';
import { Ex72AttributeBindingComponent } from './components/ex7-2-attribute-binding/ex7-2-attribute-binding.component';
import { Ex73AttributeBindingComponent } from './components/ex7-3-attribute-binding/ex7-3-attribute-binding.component';
import { Ex74EvenBindingComponent } from './components/ex7-4-even-binding/ex7-4-even-binding.component';
import { Ex75EventBindingComponent } from './components/ex7-5-event-binding/ex7-5-event-binding.component';

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
        path: 'ex9-7-custom-directive',
        title: 'ex9-7-custom-directive',
        component: Ex97CustomDirectiveComponent,
    },    
    {
        path: 'ex7-1-string-interpolation',
        title: 'ex7-1-string-interpolation',
        component: Ex71StringInterpolationComponent,
    },
    {
        path: 'ex7-2-attribute-binding',
        title: 'ex7-2-attribute-binding',
        component: Ex72AttributeBindingComponent,
    },    
    {
        path: 'ex7-3-attribute-binding',
        title: 'ex7-3-attribute-binding',
        component: Ex73AttributeBindingComponent,
    },    
    {
        path: 'ex7-4-even-binding',
        title: 'ex7-4-even-binding',
        component: Ex74EvenBindingComponent,
    }, 
    {
        path: 'ex7-5-event-binding',
        title: 'ex7-5-event-binding',
        component: Ex75EventBindingComponent,
    },
    {
        path: '**',
        redirectTo: 'home',
    }
];
