import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environments/envairoment';
import { Header } from '../interfaces/header';
import { DetailIndicators, Indicator } from '../interfaces/indicator';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  header: Header = {}
  constructor(
    private router: Router,
    private _http: HttpClient
  ) { }
  public redirect(route: string) {
    this.router.navigateByUrl(route);
  }
  callServiceIndicators(service: string) {
    return this._http.get<Indicator>(environment.API_URL + service);
  }
  async callServiceDetailIndicator(service: string) {
    return this._http.get<DetailIndicators>(environment.API_URL + service);
  }
  getFormattedDate(date: Date) {
    var year = date.getFullYear();

    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;

    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    return year + '-' + month + '-' + day;
  }
}
