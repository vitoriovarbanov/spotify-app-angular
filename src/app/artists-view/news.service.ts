import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  newsApiUrl: string = `https://newsapi.org/v2/everything?q=Tinashe&language=en`


  constructor(private http: HttpClient) { }

  getNewsForEachArtist() {
    const headers = new HttpHeaders({ 'Authorization': `${localStorage.getItem('newsApiKey')}` })
    return this.http.get(`${this.newsApiUrl}`, { headers: headers })
  }
}
