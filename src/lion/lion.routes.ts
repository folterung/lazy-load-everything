import { Routes } from '@angular/router';

import { LionComponent } from './lion.component';

export const lionRoutes: Routes = [
  {
    path: '',
    component: LionComponent,
    children: [
      {
        path: 'mane',
        loadChildren: './mane/mane.module#ManeModule'
      }
    ]
  }
];
