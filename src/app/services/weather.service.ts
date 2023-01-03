import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }
//  https://api.weatherapi.com/v1/forecast.json?
// key=527154210584414cab5111514230201
// &q=London&days=1&aqi=no&alerts=yes
  getWeatherData(cityName: string):Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.config.apiUrl, {
      params: new HttpParams()
      .set(environment.config.headerKey, environment.config.headerValue)
      .set('q', cityName)
      .set('days', 1)
      .set('aqi', 'no')
      .set('alerts', 'yes')
    })
  }
}
