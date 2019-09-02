import { Component, OnInit } from '@angular/core';
import { NewsService } from './../news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  News: any;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getTopNews().subscribe((data) => {
      this.News = data;
      console.log(this.News);
    })
  }

}
