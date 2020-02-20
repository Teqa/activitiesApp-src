import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivityBookingPageRoutingModule } from './activity-booking-routing.module';

import { ActivityBookingPage } from './activity-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivityBookingPageRoutingModule
  ],
  declarations: [ActivityBookingPage]
})
export class ActivityBookingPageModule {}
