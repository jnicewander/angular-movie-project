import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TheMovieDbApiService {

  constructor(private http: HttpClient) { }
  getMovies(){
    return this.http.get('https://api.themoviedb.org/3/discover/movie');
  } 
   
}
