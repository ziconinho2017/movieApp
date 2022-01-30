import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Movie } from './movies/movies.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  #baseUrl = "http://localhost:3000/api";
  constructor(private http : HttpClient) { }
  public getMovies():Promise<Movie[]>{
    const url = this.#baseUrl+"/movies"
    return lastValueFrom(this.http.get(url))
    .then(resolve => resolve as Movie[])
    .catch(this.errorHandle)
  }
  public getMovie(movieId:string):Promise<Movie>{
    const url = this.#baseUrl+"/movies/"+movieId
    return lastValueFrom(this.http.get(url))
    .then(resolve => resolve as Movie)
    .catch(this.errorHandle)
  }
  public deleteMovie(movieId:string){
    const url = this.#baseUrl+"/movies/"+movieId
    return lastValueFrom(this.http.delete(url))
    .then(resolve => resolve)
    .catch(this.errorHandle)
  }
  public errorHandle(error:any){
    return Promise.reject(error.message || error);
  }
}
