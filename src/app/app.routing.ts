import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';

export const routes: Routes = [


    { path: '', redirectTo: 'aplicacion', pathMatch: 'full' },

    {
        path: 'aplicacion',
        component: MainComponent,
        children:[
        ]
        
    },

    { path: '**', redirectTo: 'aplicacion' }
];