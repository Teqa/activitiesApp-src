import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
    private _url = 'https://rondleidingen.i-reserve.net/';
    
    constructor() { }
    
    get url(): string
    {
        return this._url;
    }
}
