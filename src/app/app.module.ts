import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
// import { MyTeamsPage } from '../pages/myTeams/myTeamsPage';
// import { TournamentsPage } from '../pages/tournaments/tournaments';
// import { GamePage } from '../pages/game/game';
// import { TeamDetailPage } from '../pages/team-detail/team-detail';
// import { TeamsPage } from '../pages/teams/teams';
import {MyTeamsPage, TournamentsPage, GamePage, TeamDetailPage, TeamsPage, StandingsPage, TeamHomePage} from '../pages/pages';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Declare all components here, pages or other.
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MyTeamsPage,
    TournamentsPage,
    GamePage,
    TeamDetailPage,
    TeamsPage,
    StandingsPage,
    TeamHomePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  //entryComponents refers to 'static pages'. So declare all pages here.
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MyTeamsPage,
    TournamentsPage,
    GamePage,
    TeamDetailPage,
    TeamsPage,
    StandingsPage,
    TeamHomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
