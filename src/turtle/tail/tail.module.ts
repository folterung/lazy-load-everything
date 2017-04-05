import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TailComponent } from './tail.component';
import { tailRoutes } from './tail.routes';

@NgModule({
  declarations: [
    TailComponent
  ],
  imports: [
    RouterModule.forChild(tailRoutes)
  ]
})
export class TailModule {}
