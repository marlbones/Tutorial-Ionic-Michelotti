import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeamHomePage } from '../pages';

/**
 * Generated class for the TeamsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  teams = [
    { id: 1, name: 'Golden Warriors'},
    { id: 2, name: 'Chocolate Thunders'},
    { id: 3, name: 'Babylon Five'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  itemTapped($event, team) {
    this.navCtrl.push(TeamHomePage, team); //at the end here we're sending team as a params
  }


}
