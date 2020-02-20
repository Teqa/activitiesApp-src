import { AuthenticationService } from './../../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TabnavPage } from './../../tabnav/tabnav.page';
import { Validators, FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { first } from 'rxjs/operators';
import { User } from '../../../models/user';
import _ from "underscore";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  
  public user: User;
  public loggedin = false;
  private loading;
  private alert;
  public loginForm:FormGroup;
  
  constructor(
    public auth: AuthenticationService, 
    public tabnav: TabnavPage,
    public router: Router,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController) { 
        // constructor
      }

  ngOnInit() {
    this.auth.currentUserSubject.subscribe((data) => {
        if (_.isNull(data)) { this.loggedin = false }
        else { 
          this.loggedin = true;
          this.user = data; 
          }
      });
    this.loginForm = this.formBuilder.group({
        email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
        password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
      });
  }

  async presentAlert(msg) {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Niet gelukt in te loggen. Technische melding: ',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }
                
  login(){
    if (!this.loginForm.valid){
      console.log(this.loginForm.value);
    }   else {
        this.auth.login(this.loginForm.value.email, this.loginForm.value.password)
            .pipe(first())
            .subscribe(
                data => {
                    this.loading = false;
                    this.router.navigate(['/tab-nav/register']);
                },
                error => {
                    console.log(error);
                    this.presentAlert(error.error.error.message);
                    this.loading = false;
                });  
    }
  }
  
  logout() {
    this.auth.logout();
    this.router.navigate(['/tab-nav/login']);
  }
  
  goToResetPassword(){
    this.router.navigate(['/tab-nav/login']);
  }

  createAccount(){
    this.router.navigate(['/tab-nav/register']);
  }
}
