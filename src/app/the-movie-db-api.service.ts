import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class TheMovieDbApiService {
  baseURL: string = 'https://api.themoviedb.org/3/discover/movie?api_key=a54ab344ecaa235e031650493214996a'

  constructor(private http: HttpClient) { }
  url: string;

  getMovies(year?: number, rating?: number, genre?: string) {
    // if(year) {
    //   this.url = `${this.baseURL}&year=${year}`;
    // }
    // if(rating) {
    //   this.url = `${this.baseURL}&vote_count.gte=${rating}`;
    // }
    // if(genre) {
    //   this.url = `${this.baseURL}&with_genres=${genre}`;
    // }

    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=a54ab344ecaa235e031650493214996a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2018');
  } 
  
}

// https://api.themoviedb.org/3/discover/movie?api_key=a54ab344ecaa235e031650493214996a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2018
