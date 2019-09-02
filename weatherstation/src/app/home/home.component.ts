import { Component, OnInit } from '@angular/core';
import { NewsService } from './../news.service';
import { WeatherService } from './../weather.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  News;
  WeatherNow;
  Forecast = [];
  subscription: Subscription;

  constructor(private newsService: NewsService, private weatherService: WeatherService) {}

  ngOnInit() {
    this.getData()
    const source = interval(3600000);
    this.subscription = source.subscribe((val) => this.getData());
  }

  getData() {
    this.Forecast = [];
    this.newsService.getTopNews().subscribe((data) => {
      this.News = data["articles"];
    });
    this.weatherService.getWeatherNow().subscribe((data) => {
      this.WeatherNow = data;
    });
    this.weatherService.getForecast().subscribe((data) => {
      for (let i = 0; i < data["list"].length; i++) {
        if (i % 8 == 0){
          this.Forecast.push(data["list"][i])
        }
      }
    })
  }

}
