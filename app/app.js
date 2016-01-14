import { App, IonicApp, Platform } from 'ionic/ionic';
import { MovieListPage } from './pages/movie-list/movie-list';
 
@App({
  templateUrl: 'build/app.html'
})
 
class MyApp {
  constructor(app: IonicApp, platform: Platform) {
 
    this.app = app;
    this.platform = platform;
    this.initializeApp();
 
    this.rootPage = MovieListPage;
  }
 
  initializeApp() {
    this.platform.ready().then(() => {
      if (typeof StatusBar !== 'undefined') {
        StatusBar.styleDefault();
      }
    });
  }
}