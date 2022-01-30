import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Movie } from '../movies/movies.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  Movie!:Movie;
  constructor(private actRoute:ActivatedRoute, private getData:ApiService) { }

  ngOnInit(): void {
    const movieId = this.actRoute.snapshot.params["movieId"];
    this.getData.getMovie(movieId)
    .then(resolve=>this.setMovie(resolve))
    .catch(this.showError)
  }
  private setMovie(movie:Movie){
    this.Movie = movie
  }
  private showError(){
    console.log("Error Occured");
  }

}
