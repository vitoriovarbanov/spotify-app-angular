import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  newsApiUrl: string = `https://newsapi.org/v2/everything?`


  constructor(private http: HttpClient) { }

  getNewsForEachArtist(artistName) {
    const headers = new HttpHeaders({ 'Authorization': `${localStorage.getItem('newsApiKey')}` })
     return this.http.get(`${this.newsApiUrl}q=${artistName}&language=en`, { headers: headers })
      .pipe(map((data) => {
        console.log(data)
        return data['articles'].filter(x=>{
          x.description = x.description.replace(/<[^>]*>/g, '');
          return x.content.includes(artistName)
        })
      }))
  }
}
