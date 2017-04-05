import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ShellComponent } from './shell.component';
import { shellRoutes } from './shell.routes';

@NgModule({
  declarations: [
    ShellComponent
  ],
  imports: [
    RouterModule.forChild(shellRoutes)
  ]
})
export class ShellModule {}
