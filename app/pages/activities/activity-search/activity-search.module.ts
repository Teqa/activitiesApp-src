import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivitySearchPageRoutingModule } from './activity-search-routing.module';

import { ActivitySearchPage } from './activity-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivitySearchPageRoutingModule
  ],
  declarations: [ActivitySearchPage]
})
export class ActivitySearchPageModule {}
