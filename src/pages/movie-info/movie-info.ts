import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-movie-info',
  templateUrl: 'movie-info.html'
})
export class MovieInfoPage {

	movie: {};	

	constructor(public navCtrl: NavController, private navParams: NavParams) {
		this.movie = navParams.get('movie');
	}

}
