import { Component } from '@angular/core';
import {
  IonicPage,
  LoadingController,
  NavController,
  NavParams
} from 'ionic-angular';

import { UsersProvider} from '../../providers/users/users';
import { User } from '../../models/user/user'
/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  user: User;

  constructor(
    private loadingCtrl: LoadingController,
    private usersProvider: UsersProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getUser(this.navParams.data.id);

  }

  private getUser(id:string): void{

    let loader = this.loadingCtrl.create({
      content: 'loading...',
    });

    loader.present();

    this.usersProvider.getUser(id).subscribe(

      (response:any)=>{
        this.user = response.user;
        loader.dismiss();
      }
    );
  }

}
