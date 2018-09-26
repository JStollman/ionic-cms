import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
 } from 'ionic-angular';

import { UsersProvider } from '../../providers/users/users';
import { User } from '../../models/user/user';

import { UserPage } from '../user/user';

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  users: User[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private usersProvider: UsersProvider,
    private loadingCtrl: LoadingController,
    ){
  }

  ionViewDidLoad() {
    this.getUsers();
  }

  private getUsers(): void{

    let loader = this.loadingCtrl.create({
      content: 'loading...',
    });

    loader.present();

    this.usersProvider.getUsers().subscribe(

      (response:any)=>{
        this.users = response.users;
        loader.dismiss();
      }
    );
  }

  toUser(id:string): void{
    this.navCtrl.push(UserPage, {id: id});
  }

}
