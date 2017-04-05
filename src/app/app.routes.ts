import { Routes } from '@angular/router';

import { AppComponent } from './app.component';

export const appRoutes: Routes = [
  {
    path: 'lion',
    loadChildren: '../lion/lion.module#LionModule'
  },
  {
    path: 'turtle',
    loadChildren: '../turtle/turtle.module#TurtleModule'
  }
];
