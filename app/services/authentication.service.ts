import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfigService } from './config.service';
import { User } from '../models/user';
import _ from "underscore";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private url = this.configService.url;
  public currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
    
  constructor(
      private storage: Storage, 
      private plt: Platform,
      private http: HttpClient, 
      private configService: ConfigService
      ) { 
      
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
      
    this.plt.ready().then(() => {
      
    });
  }
  
  public get currentUserValue(): User {
      if (!!(this.currentUserSubject)) return null;
      else  return this.currentUserSubject.value;
    }

  login(username: string, password: string) {
        localStorage.removeItem('currentUser');
        return this.http.post<any>(`${this.url}api/rest/user/jwt`, JSON.stringify({ username, password }) )
            .pipe(map(jwt => {
                console.log(jwt);
                let U = new User();
                U.username = username;
                U.password = password;
                U.jwt = jwt;
                U.loggedin = true;
                localStorage.setItem('currentUser', JSON.stringify(U));
                this.currentUserSubject.next(U);
                return U;
            }));
    }
    
 
  logout() {
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
      this.currentUser = this.currentUserSubject.asObservable();
  }
}