import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TurtleComponent } from './turtle.component';
import { turtleRoutes } from './turtle.routes';

@NgModule({
  declarations: [
    TurtleComponent
  ],
  imports: [
    RouterModule.forChild(turtleRoutes)
  ]
})
export class TurtleModule {}
