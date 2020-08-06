import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SearchCriteriaInterface } from './api-response';

@Injectable({
  providedIn: 'root'
})

export class TheMovieDbApiService {

  constructor(private http: HttpClient) { }
  baseURL: string = 'https://api.themoviedb.org/3/discover/movie?api_key=a54ab344ecaa235e031650493214996a';
  defaultParams: string = '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&vote_count.gte=100';

  getMovies(searchCriteria?: SearchCriteriaInterface) {
    // api call to populate movies
    let url: string = `${this.baseURL}${this.defaultParams}`
    if(searchCriteria && searchCriteria.year) {
      url += `&primary_release_year=${searchCriteria.year}`;
    } 
    if(searchCriteria && searchCriteria.genre) {
      url += `&with_genres=${searchCriteria.genre}`;      
    }

    if(searchCriteria && searchCriteria.rating) {
        url += `&vote_average.gte=${searchCriteria.rating}`;       
    }
    if(!searchCriteria){
        url = `${url}`;        
    }

    console.log(url);
    return this.http.get(url);
  } 

}