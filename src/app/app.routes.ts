import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
  },
  {
    path: 'compare',
    loadComponent: () => import('./pages/compare/compare').then(m => m.Compare),
  },
  {
    path: 'compare/:slug',
    loadComponent: () => import('./pages/compare/detail/compare-detail').then(m => m.CompareDetail),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then(m => m.About),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then(m => m.Contact),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
