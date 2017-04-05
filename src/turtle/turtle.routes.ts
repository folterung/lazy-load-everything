import { Routes } from '@angular/router';

import { TurtleComponent } from './turtle.component';

export const turtleRoutes: Routes = [
  {
    path: '',
    component: TurtleComponent,
    children: [
      {
        path: 'shell',
        loadChildren: './shell/shell.module#ShellModule'
      },
      {
        path: 'tail',
        loadChildren: './tail/tail.module#TailModule'
      }
    ]
  }
];
