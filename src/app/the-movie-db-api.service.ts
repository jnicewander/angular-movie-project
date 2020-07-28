import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SearchCriteriaInterface } from './api-response';

@Injectable({
  providedIn: 'root'
})

export class TheMovieDbApiService {

  constructor(private http: HttpClient) { }
  baseURL: string = 'https://api.themoviedb.org/3/discover/movie?api_key=a54ab344ecaa235e031650493214996a';
  initialParameters: string = '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&vote_count.gte=100';

  getMovies(searchcriteria?: SearchCriteriaInterface) {
    // api call to populate movies
    let url: string = `${this.baseURL}`
    if(searchcriteria && searchcriteria.year) {
      url = `${url}${this.initialParameters}&primary_release_year=${searchcriteria.year}`;
    } 
    if(searchcriteria && searchcriteria.genre) {
      url = `${url}${this.initialParameters}&with_genres=${searchcriteria.genre}`;
    }

    if(searchcriteria && searchcriteria.rating) {
        url = `${url}${this.initialParameters}&vote_average.gte=${searchcriteria.rating}`; 
    }
    if(!searchcriteria){
        url = `${url}${this.initialParameters}`;
    }

    return this.http.get(url);
  } 

}