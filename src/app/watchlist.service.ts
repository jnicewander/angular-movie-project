import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
    private movie: object;
    //public favoritesArray: array;

    getMovie(){
        return this.movie;
    }

    addMovies(){

    }


}
