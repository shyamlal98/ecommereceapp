import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email:string,password:string):any{
    const loginCredential = {email,password};
    console.log(loginCredential);
     return of(loginCredential);
  }
}
