import { Component, OnInit } from '@angular/core';
import { Movies } from '../services/movies.service';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css'],
  providers: [Movies]
})
export class MyMovieComponent implements OnInit {
    movieId: Number  
    movie: {}
  constructor(private Cinema: Movies, private route: ActivatedRoute) { }
      
    ngOnInit() {
      this.route.params.subscribe((params)=> this.movieId = Number(params['id']))
      this.movie = this.Cinema.getMovie(this.movieId)
    }

}
