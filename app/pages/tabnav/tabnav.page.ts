import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { User } from '../../models/user';
import _ from "underscore";

@Component({
  selector: 'app-tabnav',
  templateUrl: './tabnav.page.html',
  styleUrls: ['./tabnav.page.scss'],
})
export class TabnavPage implements OnInit {

  public selectedIndex = 0;
  public user: User;
  public loggedin = false;
  
  public pagesLoggedOut = [
    {
      title: 'Inloggen',
      url: '/tab-nav/login',
      icon: 'contact'
    },
    {
      title: 'Registreren',
      url: '/tab-nav/register',
      icon: 'paper-plane'
    }
  ];
  public pagesLoggedIn = [
    {
      title: 'Uitloggen',
      action: 'logout',
      icon: 'contact'
    },
    {
      title: 'Mijn Reserveringen',
      url: '/tab-nav/bookings',
      icon: 'paper-plane'
    },
    {
      title: 'Mijn Profiel',
      url: '/tab-nav/profile',
      icon: 'paper-plane'
    }
  ];
  
  constructor(
    private auth: AuthenticationService,
    public router: Router
    ) { }

  ngOnInit() {
      this.auth.currentUserSubject.subscribe((data) => {
          if (_.isNull(data)) { this.loggedin = false }
          else { 
            this.loggedin = true;
            this.user = data; 
            }
        });
  }
  
  clickEvent(param) {
      if (param == 'logout') {
          this.logout();
      }
  }
  
  logout() {
    this.auth.logout();
    this.router.navigate(['/tab-nav/login']);
  }
}
