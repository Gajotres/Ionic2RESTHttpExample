import {Page, NavController} from 'ionic/ionic';
import {MovieService} from '../services/MovieService';
 
@Page({
  templateUrl: 'build/pages/movie-list/movie-list.html',
  providers: [MovieService]
})
 
export class MovieListPage {
  constructor(nav: NavController, movieService:MovieService) {
    this.nav = nav;
    this.movieService = movieService;
  }
 
  searchMovieDB(event, key) {
    if(event.target.value.length > 2) {
      this.movieService.searchMovies(event.target.value).subscribe(
        data => {this.movies = data.results; console.log(data);},
        err => this.logError(err),
        () => console.log('Movie Search Complete')
      );
    }
  } 
}