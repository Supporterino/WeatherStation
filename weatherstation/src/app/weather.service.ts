import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = 'cf75094b60559b699b85cc3a1ded616e';

  constructor(private http: HttpClient) {
   }

  getWeatherNow() {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?zip=74821,de&units=metric&lang=de&appid=' + this.apiKey)
  }

  getForecast() {
    return this.http.get('https://api.openweathermap.org/data/2.5/forecast?zip=74821,de&units=metric&lang=de&appid=' + this.apiKey)
  }
}
