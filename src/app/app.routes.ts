import { Routes } from '@angular/router';
import { oauthGuard } from './oauth.guard';

export const routes: Routes = [

  { path: 'login', loadComponent: () => import('./pages/login/login.component')},
  { path: 'about', canActivate: [oauthGuard], loadComponent: () => import('./pages/about/about.component')},
  { path: 'home', canActivate: [oauthGuard], loadComponent: () => import('./pages/home/home.component')},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', loadComponent: () => import('./pages/page-not-found/page-not-found.component')},  // Wildcard route for a 404 page


];



