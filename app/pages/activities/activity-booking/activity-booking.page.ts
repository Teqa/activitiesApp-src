import { ActivityService } from './../../../services/activity.service';
import { ConfigService } from './../../../services/config.service';
import { Component, OnInit } from '@angular/core';
import _ from "underscore";

export interface Iresults {
   status: boolean,
   booking_id: string,
   messages: Array<String>
}

@Component({
  selector: 'app-activity-booking',
  templateUrl: './activity-booking.page.html',
  styleUrls: ['./activity-booking.page.scss'],
})

export class ActivityBookingPage implements OnInit {
  information = null;
  contact = null;
  participants = null;
  results = {status: null, booking_id: null, messages: []};
  
  constructor(private activityService: ActivityService,
    private configService: ConfigService) { }

  ngOnInit() {
      this.information = this.activityService.chosen_event;
      this.contact = this.activityService.chosen_contact;
      this.participants = this.activityService.chosen_parts;
      let body = this._constructBooking();
      this.activityService.subscribeEvent(body).subscribe((response) => {
        this.results = <Iresults>response;
        if (this.results.status == true) {
            this.activityService.booked_events.push(this.information.event_id);
        }
        });
  }
    
  _constructBooking() {
      let parts = {};
      let idx = 0;
      _.each(this.participants, function(amount, part_id) {
        for (var _i = 0; _i < amount; _i++) {
            parts[idx] = {"id": part_id};
            idx++;
        }
      });;
      let Booking = { 
            event_id: this.information.event_id,
            customer: this.activityService.chosen_contact, 
            participants: parts,
        };
      let BookingJson = JSON.stringify(Booking);
      return BookingJson;
  }
}
