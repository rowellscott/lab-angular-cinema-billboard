import { Component, OnInit } from '@angular/core';
import { Movies } from '../services/movies.service'

@Component({
  selector: 'my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css'],
  providers: [Movies]
})
export class MyHomeComponent implements OnInit {
  movies: Array<Object>;
  constructor(private Cinema: Movies) {}

  ngOnInit() {
    this.movies = this.Cinema.getMovies()
  }

}
