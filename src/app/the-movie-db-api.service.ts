import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class TheMovieDbApiService {

  constructor(private http: HttpClient) { }
  API_KEY: string = 'a54ab344ecaa235e031650493214996a';

  //  https://api.themoviedb.org/3/search/movie?api_key=a54ab344ecaa235e031650493214996a&language=en-US&query=matrix&page=1&include_adult=false
  getMovies(){
    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=a54ab344ecaa235e031650493214996a&language=en-US&query=matrix&page=1&include_adult=false');
  } 
  
}
