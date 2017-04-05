import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LionComponent } from './lion.component';
import { lionRoutes } from './lion.routes';

@NgModule({
  declarations: [
    LionComponent
  ],
  imports: [
    RouterModule.forChild(lionRoutes)
  ]
})
export class LionModule {}
