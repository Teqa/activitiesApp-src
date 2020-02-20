import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Validators, FormBuilder, FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivityPartsPageRoutingModule } from './activity-parts-routing.module';

import { ActivityPartsPage } from './activity-parts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ActivityPartsPageRoutingModule
  ],
  declarations: [ActivityPartsPage]
})
export class ActivityPartsPageModule {}
