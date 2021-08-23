import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CommonConstants } from './shared/constants/url-contants';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getCountries() {
    return this.http.get(
      `${environment.serverUrl}${CommonConstants.Urls.getCountries}`
    );
  }
}
