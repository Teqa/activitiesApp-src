import { ActivityService } from './../../../services/activity.service';
import { ConfigService } from './../../../services/config.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import _ from "underscore";
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.page.html',
  styleUrls: ['./activity-details.page.scss'],
})

export class ActivityDetailsPage implements OnInit {
 
  information = null;
  blocked = true;
  appurl = this.configService.url;
    
  /**
   * Constructor of our details page
   * @param activatedRoute Information about the route we are on
   * @param activityService The activity Service to get data
   */
  constructor(private activatedRoute: ActivatedRoute, private activityService: ActivityService,
    private configService: ConfigService) { }
 
  ngOnInit() {
    let event_id = this.activatedRoute.snapshot.params.event_id;
    this.activityService.getDetails(event_id).subscribe((response) => {
        this.information = response;
        this.activityService.chosen_event = response;
    });
  }
  
  /*
   * When this page is reloaded, check if the event was booked from this app
   */
  ionViewWillEnter() {
    let event_id = this.activatedRoute.snapshot.params.event_id;
    if (_.contains(this.activityService.booked_events, event_id)) this.blocked = true;
    else this.blocked = false;
  }
}