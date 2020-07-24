import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class TheMovieDbApiService {
  baseURL: string = 'https://api.themoviedb.org/3/discover/movie?api_key=a54ab344ecaa235e031650493214996a'

  constructor(private http: HttpClient) { }
  url: string;

  getMovies(year?: string, rating?: number, genre?: string) {
    if(year) {
      this.url = `${this.baseURL}&year=${year}`;
    }
    // if(rating) {
    //   this.url = `${this.baseURL}&vote_count.gte=${rating}`;
    // }
    // if(genre) {
    //   this.url = `${this.baseURL}&with_genres=${genre}`;
    // }

    return this.http.get(this.url);
  } 
  
}
