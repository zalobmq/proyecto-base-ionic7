import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vista3Page } from './vista3.page';

const routes: Routes = [
  {
    path: '',
    component: Vista3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vista3PageRoutingModule {}
