import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TournamentsPage } from '../pages';

@Component({
  selector: 'page-myTeamsPage',
  templateUrl: 'myTeamsPage.html',
})

export class MyTeamsPage {

  constructor(private nav: NavController){}

  goToTournaments() {
    this.nav.push(TournamentsPage);
  }
}
