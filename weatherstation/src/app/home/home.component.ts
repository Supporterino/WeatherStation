import { Component, OnInit } from '@angular/core';
import { NewsService } from './../news.service';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  News;
  WeatherNow;
  Forecast = [];

  constructor(private newsService: NewsService, private weatherService: WeatherService) { }

  ngOnInit() {
    this.newsService.getTopNews().subscribe((data) => {
      this.News = data["articles"];
    });
    this.weatherService.getWeatherNow().subscribe((data) => {
      this.WeatherNow = data;
      console.log(this.WeatherNow)
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
