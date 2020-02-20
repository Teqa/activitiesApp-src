import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivityPartsPage } from './activity-parts.page';

const routes: Routes = [
  {
    path: '',
    component: ActivityPartsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivityPartsPageRoutingModule {}
