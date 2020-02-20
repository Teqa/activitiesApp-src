import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivitySubscribePage } from './activity-subscribe.page';

const routes: Routes = [
  {
    path: '',
    component: ActivitySubscribePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivitySubscribePageRoutingModule {}
