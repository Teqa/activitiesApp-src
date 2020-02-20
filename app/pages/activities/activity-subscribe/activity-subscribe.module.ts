import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Validators, FormBuilder, FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivitySubscribePageRoutingModule } from './activity-subscribe-routing.module';

import { ActivitySubscribePage } from './activity-subscribe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ActivitySubscribePageRoutingModule
  ],
  declarations: [ActivitySubscribePage]
})
export class ActivitySubscribePageModule {}
