import { ActivityService } from './../../../services/activity.service';
import { ConfigService } from './../../../services/config.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
 
@Component({
  selector: 'app-activity-search',
  templateUrl: './activity-search.page.html',
  styleUrls: ['./activity-search.page.scss'],
})
export class ActivitySearchPage implements OnInit {
 
  results: Observable<any>;
  searchTerm: string = '';
  appurl = this.configService.url;
  type = '';
 
  /**
   * Constructor of our first page
   * @param activityService The movie Service to get data
   */
  constructor(private activityService: ActivityService,
    private configService: ConfigService) { }
 
  ngOnInit() { 
      this.searchChanged();
  }
 
  searchChanged() {
    this.results = this.activityService.searchData(this.searchTerm, this.type);
  }
}