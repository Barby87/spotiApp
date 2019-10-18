// Este archivo sólo tiene las rutas que voy a usar en la app, y se debe importar en app.module.ts
import { Routes } from '@angular/router';
// import { homedir } from 'os';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }

];
