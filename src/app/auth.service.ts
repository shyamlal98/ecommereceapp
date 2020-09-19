import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { of, Subject, throwError } from 'rxjs';
import { switchMap,catchError } from 'rxjs/operators';
import { User } from './user';

@Injectable({
    providedIn: 'root'
  })

export class AuthService {
  private user$ = new Subject<User>();
  private apiUrl = '/api/auth/';
  constructor(private httpClient:HttpClient) { }

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
    return this.httpClient.post(`${this.apiUrl}register`,user).pipe(
      switchMap(savedUser => {
        this.setUser(savedUser);
        console.log(`user registered successfully ${savedUser}`);
        return of(savedUser);
      }),
      catchError(e=>{
        console.log('Server Error Occured',e);
        return throwError("Registration Failed contact to admin");
      })
    );
    
    // apicalll to save user in db
    //update the user subject
    // this.setUser(user);

    // console.log("registered user successfully",user);
    // return of(user);
  }

  private setUser(user){
    this.user$.next(user);
  }

  get user(){
    return this.user$.asObservable();
  }
}
