import { Component, OnInit } from '@angular/core';
import { TheMovieDbApiService } from '../the-movie-db-api.service';
import { ApiResponse, MovieDetailsObject } from '../api-response';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private apiService: TheMovieDbApiService) { }

  movies: MovieDetailsObject[];

  ngOnInit(): void {
    this.apiService.getMovies().subscribe((response: ApiResponse) => {
      this.movies = response.results
    })
  }

}