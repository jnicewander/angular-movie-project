import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class TheMovieDbApiService {

  constructor(private http: HttpClient) { }
  baseURL: string = 'https://api.themoviedb.org/3/discover/movie?api_key=a54ab344ecaa235e031650493214996a';
  initialParameters: string = '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false';

  getMovies(year?: number) {
    // api call to populate movies
    let url: string = `${this.baseURL}`
    if(year) {
      url = `${url}${this.initialParameters}&primary_release_year=${year}`;
    } else {
      url = `${url}${this.initialParameters}`;
    }

    return this.http.get(url);
  } 

}
