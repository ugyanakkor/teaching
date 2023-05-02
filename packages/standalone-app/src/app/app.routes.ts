import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'foo',
    loadComponent: () => import('./foo/foo.component').then(m => m.FooComponent)
  }
];
