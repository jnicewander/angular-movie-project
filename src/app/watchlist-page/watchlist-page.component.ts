import { Component, OnInit } from '@angular/core';
import { WatchlistService } from '../watchlist.service'
import { MovieDetailsObject } from '../api-response'

@Component({
  selector: 'app-watchlist-page',
  templateUrl: './watchlist-page.component.html',
  styleUrls: ['./watchlist-page.component.css'],
})
export class WatchlistPageComponent implements OnInit {
  watchlist: MovieDetailsObject[]; 
  constructor(private watchlistService: WatchlistService) { }
  ngOnInit(){
    this.watchlist = this.watchlistService.watchlistMovies
  }
}


