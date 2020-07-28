import { Component, OnInit, Input } from '@angular/core';
import { ApiResponse, MovieDetailsObject } from '../api-response';

@Component({
  selector: 'app-watchlist-page',
  templateUrl: './watchlist-page.component.html',
  styleUrls: ['./watchlist-page.component.css']
})
export class WatchlistPageComponent implements OnInit {

  constructor() { }

  @Input() favoriteMovies: MovieDetailsObject;
  
  ngOnInit(): void {
      
  }

}
