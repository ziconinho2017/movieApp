import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
export class Movie{
  _id!:string;
  title!:string;
  plot !: string;
  released !: string;
  genres !: [string];
  directors !: [string];
  tomatoes !: Tomato;
}
class Tomato{
  viewer !: viewer;
}
class viewer{
  rating !: number;
  numRevies !: number;
  meter !: number;
}
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  Movies !: Movie[];
  constructor(private getData:ApiService) { }

  ngOnInit(): void {
    this.getData.getMovies()
    .then(resolve => this.setMovies(resolve))
    .catch(this.showError);
  }
  private setMovies(movies : Movie[]){
    this.Movies = movies;
  }
  private showError(){
    console.log("Error Occured");
  }
  private showSuccess(){
    console.log("Deleted Successfully");
    setTimeout(()=>window.location.reload(),2000);
  }
  public deleteMovie(movieId:string){
    this.getData.deleteMovie(movieId)
    .then(this.showSuccess)
    .catch(this.showError);
  }
}
