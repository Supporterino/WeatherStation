import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-now',
  templateUrl: './weather-now.component.html',
  styleUrls: ['./weather-now.component.scss']
})
export class WeatherNowComponent implements OnInit {

  @Input() WeatherNow;

  constructor() { }

  ngOnInit() {
  }

}
