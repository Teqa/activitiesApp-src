import { ActivityService } from './../../../services/activity.service';
import { ConfigService } from './../../../services/config.service';
import { Component, OnInit } from '@angular/core';
import _ from "underscore";
import { Validators, FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity-subscribe',
  templateUrl: './activity-subscribe.page.html',
  styleUrls: ['./activity-subscribe.page.scss'],
})
export class ActivitySubscribePage implements OnInit {
  information = null;
  contact = null;
  participants = null;
  
  validations_form: FormGroup;
  
  constructor(
    private activityService: ActivityService, 
    public formBuilder: FormBuilder,
    private configService: ConfigService, 
    private router: Router
    ) { }

  ngOnInit() {
    this.information = this.activityService.chosen_event;
    this.contact = this._initContact(this.activityService.chosen_contact);
    var participants = this.information['participants']['object'];
    this.participants =  _.values(participants);
    this.validations_form = this.formBuilder.group({
      initials: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      terms: new FormControl(false, Validators.pattern('true'))
    });
    this.validations_form.controls['initials'].setValue(this.contact.initials);
    this.validations_form.controls['lastname'].setValue(this.contact.lastname);
    this.validations_form.controls['email'].setValue(this.contact.email);
  } //ngOnInit
  
  _initContact(contact) {
      if (_.isNull(contact)) {
          contact = {
              initials: '',
              lastname: '',
              email: '',
              terms: ''
          };
      }
      return contact;
  }
 
  validation_messages = {
    'initials': [
      { type: 'required', message: 'Initials is required.' }
    ],
    'lastname': [
      { type: 'required', message: 'Last name is required.' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please wnter a valid email.' }
    ],
    'terms': [
      { type: 'pattern', message: 'You must accept terms and conditions.' }
    ],
  };

  onSubmit(data){
    delete data.terms;
    this.activityService.chosen_contact = data;
    this.router.navigate(['/tab-nav/activity-booking']);
  }
}