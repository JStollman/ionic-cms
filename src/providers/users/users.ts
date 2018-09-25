import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import {User } from '../../models/user/user';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {

  private url:string = 'http://localhost:3000/api/users';

  constructor(public http: HttpClient) {}

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }

  getUser(): void{
    console.log('one user');
  }

  createUser(): void{
    console.log('create user');
  }

  ediUser(): void{
    console.log('edit user');
  }

  deleteUser(): void{
    console.log('delete test');
  }

}
