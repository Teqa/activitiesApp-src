import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './../../guards/auth.guard';

import { TabnavPage } from './tabnav.page';

const routes: Routes = [
  {
    path: 'tab-nav',
    component: TabnavPage,
    children: [
        {
          path: 'activity-search',
          loadChildren: () => import('./../activities/activity-search/activity-search.module').then( m => m.ActivitySearchPageModule)
        },
        {
          path: 'activity-details/:event_id',
          loadChildren: () => import('./../activities/activity-details/activity-details.module').then( m => m.ActivityDetailsPageModule)
        },
        {
          path: 'activity-subscribe',
          loadChildren: () => import('./../activities/activity-subscribe/activity-subscribe.module').then( m => m.ActivitySubscribePageModule)
        },
        {
          path: 'activity-booking',
          loadChildren: () => import('./../activities/activity-booking/activity-booking.module').then( m => m.ActivityBookingPageModule)
        },
        {
          path: 'activity-parts',
          loadChildren: () => import('./../activities/activity-parts/activity-parts.module').then( m => m.ActivityPartsPageModule)
        },
        {
          path: 'about',
          loadChildren: () => import('./../about/about.module').then( m => m.AboutPageModule)
        },
        {
          path: 'login',
          loadChildren: () => import('./../public/login/login.module').then( m => m.LoginPageModule)
        },
        {
          path: 'register',
          loadChildren: () => import('./../public/register/register.module').then( m => m.RegisterPageModule)
        },
        {
          path: 'profile',
          canActivate: [AuthGuard],
          loadChildren: () => import('./../my/profile/profile.module').then( m => m.ProfilePageModule)
        },
        {
          path: 'bookings',
          canActivate: [AuthGuard],
          loadChildren: () => import('./../my/bookings/bookings.module').then( m => m.BookingsPageModule)
        }
    ]
  },
  {
    path: '',
    redirectTo: '/tab-nav/activity-search'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabnavPageRoutingModule {}
