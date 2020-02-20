import { Component, OnInit } from '@angular/core';
import { ConfigService } from './../../services/config.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  appurl = this.configService.url;
  constructor(private configService: ConfigService) { }

  ngOnInit() {
  }

}
