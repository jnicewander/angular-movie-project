import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TheMovieDbApiService } from '../the-movie-db-api.service';
import { NgForm } from '@angular/forms';
import { SearchCriteriaInterface } from '../api-response';



@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']

})
// Put interface at line 14 for further data input
export class SearchCriteriaComponent implements OnInit {
  @Output() searchCriteriaData = new EventEmitter <SearchCriteriaInterface> ();
  constructor(private apiService: TheMovieDbApiService) {  }

  onSubmit(form: NgForm) {
    let searchcriteria = {
      year: form.value.year,
      genre: form.value.genre,
      rating: form.value.rating


    }
    this.searchCriteriaData.emit(searchcriteria)
    console.log(form.value.year);
    console.log(form.value.genre);
    console.log(form.value.rating);
  }

  ngOnInit(): void {}
}
