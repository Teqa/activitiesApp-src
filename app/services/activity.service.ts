import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfigService } from './config.service';
 
// Typescript custom enum for search types (optional)
export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  url = this.configService.url;
  search = '';
  chosen_event: Observable<any>;
  chosen_parts = null;
  chosen_contact = null;
  booked_events = [];
  
  /**
   * Constructor of the Service with Dependency Injection
   * @param http The standard Angular HttpClient to make requests
   */
  constructor(private http: HttpClient, private configService: ConfigService) { }
  
  /**
  * Get data from the OmdbApi 
  * map the result to return only the results that we need
  * 
  * @param {string} title Search Term
  * @param {SearchType} type movie, series, episode or empty
  * @returns Observable with the search results
  */
  searchData(title: string, type: string): Observable<any> {
    this.search = '';
    if (title != '') {
      this.search = 'EVENT_DESC ~ ' + title; 
    }
    return this.http.get(`${this.url}api/rest/event/filter?search=${encodeURI(this.search)}&columns=EVENT_ID,OBJ_ID,DEFAULT_IMAGE,OBJECT_IMAGE,OBJ_DESC,EVENT_DESC,EVENT_DATE,EVENT_FROMTIME,EVENT_TILLTIME,NUMBER_OF_PLACES,NUMBER_OF_FREE,NUMBER_OF_WAITINGFREE,SERIES_FIRST,SERIES_TYPE,SERIES_START,SERIES_END,REX_ID,REX_DESC,EVENT_CUSTOM02`);
  }
 
  /**
  * Get the detailed information for an ID using the "i" parameter
  * 
  * @param {string} event_id imdbID to retrieve information
  * @returns Observable with detailed information
  */
  getDetails(event_id: string): Observable<any> {    
    return this.http.get(`${this.url}api/rest/event/`+`${event_id}?expand=participants&fields=long_memo,custom01,custom02,custom03,custom04,image,fromtime,tiltime,date,amount`);
  }
  
  subscribeEvent(body: string) {
    return this.http.post(`${this.url}api/rest/event/subscribe`, body);
  }
}