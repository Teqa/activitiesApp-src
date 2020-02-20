import { ActivityService } from './../../../services/activity.service';
import { ConfigService } from './../../../services/config.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import _ from "underscore";
import { Validators, FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity-parts',
  templateUrl: './activity-parts.page.html',
  styleUrls: ['./activity-parts.page.scss'],
})
export class ActivityPartsPage implements OnInit {
  information = null;
  participants = null;
  
  validations_form: FormGroup;
  
  constructor(private activityService: ActivityService,public formBuilder: FormBuilder,
    private configService: ConfigService, private router: Router) { }

  ngOnInit() {

  }
  
  ionViewWillEnter() {
    this.information = this.activityService.chosen_event;
    this.initParts();
  }
  
  initParts() {
    var participants = this.information['participants']['object'];
    this.participants =  _.values(participants);
    var participants = this.information['participants']['object'];
    this.participants =  _.values(participants);
    let formfields = {};
    _.each(participants, function (part, key) {
        if (part.min > 0) 
        {
            let ff = new FormControl('', Validators.compose([
                Validators.required,
                Validators.min(part.min),
                Validators.max(this.information.Free)
              ]));
            formfields[part.id] = ff;
        } 
        else
        {
            let ff = new FormControl('', Validators.compose([
                Validators.min(part.min),
                Validators.max(this.information.Free)
              ]));
            formfields[part.id] = ff;
        }
    }, this);
    this.validations_form = this.formBuilder.group(formfields);
  }
  
  onSubmit(data){
    this.activityService.chosen_parts = data;
    this.router.navigate(['/tab-nav/activity-subscribe']);
  }
}
