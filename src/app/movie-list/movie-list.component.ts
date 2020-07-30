import { Component, OnInit } from '@angular/core';
import { TheMovieDbApiService } from '../the-movie-db-api.service';
import { ApiResponse, MovieDetailsObject } from '../api-response';
import { WatchlistService } from '../watchlist.service'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private apiService: TheMovieDbApiService, private watchlistService: WatchlistService) { }

  movies: MovieDetailsObject[];
  showDetails: boolean = false;

  ngOnInit(): void {
    this.apiService.getMovies().subscribe((response: ApiResponse) => {
      this.movies = response.results
    })
  }
  filterMovies(event){
    this.apiService.getMovies(event).subscribe((response: ApiResponse) => {
      this.movies = response.results
    })
  }
  addMovie(movie){
    this.watchlistService.addMovie(movie)
  }
}
