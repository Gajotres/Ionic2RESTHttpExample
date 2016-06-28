import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MovieService} from '../services/MovieService';
import {MovieInfo} from '../movie-info/movie-info';

@Component({
    templateUrl: 'build/pages/movie-list/movie-list.html',
    providers: [MovieService]
})

export class MovieListPage {

	movies: Array<any>;

    constructor(private navController: NavController, private movieService: MovieService) {

    }
  
	searchMovieDB(event, key) {
		if(event.target.value.length > 2) {
			this.movieService.searchMovies(event.target.value).subscribe(
				data => {
					this.movies = data.results; 
					console.log(data);
				},
				err => {
					console.log(err);
				},
				() => console.log('Movie Search Complete')
			);
		}
	} 
  
	itemTapped(event, movie) {
		console.log(movie);  
		this.navController.push(MovieInfo, {
			movie: movie
		});
	}
}