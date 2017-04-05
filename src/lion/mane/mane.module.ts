import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ManeComponent } from './mane.component';
import { maneRoutes } from './mane.routes';

@NgModule({
  declarations: [
    ManeComponent
  ],
  imports: [
    RouterModule.forChild(maneRoutes)
  ]
})
export class ManeModule {}
