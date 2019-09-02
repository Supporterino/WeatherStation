import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  apiKey:String = '6b78bcaad8334039a2f2cfca91338097';

  constructor(private http: HttpClient) { }

  getTopNews() {
    //return this.http.get('https://newsapi.org/v2/top-headlines?country=de&apiKey=' + this.apiKey);
  }
}
