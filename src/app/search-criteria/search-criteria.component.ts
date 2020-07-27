import { Component, OnInit } from '@angular/core';
import { TheMovieDbApiService } from '../the-movie-db-api.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

  constructor(private apiService: TheMovieDbApiService) {  }

  onSubmit(form: NgForm) {
    this.apiService.getMovies(form.value.year);
    console.log(form.value.year);
  }

  ngOnInit(): void {}
}
