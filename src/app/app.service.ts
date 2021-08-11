import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  countriesUrl = 'http://universities.hipolabs.com/search?country=United+States';

  getCountries() {
    return this.http.get<AppService>(this.countriesUrl);
  }
}
