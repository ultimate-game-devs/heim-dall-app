import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'outside',
        loadComponent: () =>
          import('./outside/outside.page').then((m) => m.OutsidePage),
      },
      {
        path: 'inside',
        loadComponent: () =>
          import('./inside/inside.page').then((m) => m.InsidePage),
      },
      {
        path: '',
        redirectTo: '/tabs/inside',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/inside',
    pathMatch: 'full',
  },
];
