import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MovieListPage } from '../pages/movie-list/movie-list';
import { MovieInfoPage } from '../pages/movie-info/movie-info';
import { MovieService } from '../pages/service/movie-service';

@NgModule({
  declarations: [
    MyApp,
    MovieListPage,
	MovieInfoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MovieListPage,
	MovieInfoPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
