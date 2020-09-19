import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { User } from './user';

@Injectable({
    providedIn: 'root'
  })

export class AuthService {
  private user$ = new Subject<User>();
  constructor() { }

  login(email:string,password:string,username:string):any{
    const loginCredential = {email,password,username};
    console.log(loginCredential);
    this.setUser(username);
     return of(loginCredential);
  }
  logout(){
    // remove user from subject
    this.setUser(null);
    console.log('User Logged out successfully');

  }
  register(user:any){
    // apicalll to save user in db
    //update the user subject
    this.setUser(user);

    console.log("registered user successfully",user);
    return of(user);
  }

  private setUser(user){
    this.user$.next(user);
  }

  get user(){
    return this.user$.asObservable();
  }
}
