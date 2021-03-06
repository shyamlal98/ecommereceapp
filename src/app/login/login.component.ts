import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
  username:string;
  error:string;
  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
  }

  login():any{
    this.error ='';
    console.log(this.email,this.password,this.username);
    this.authService.login(this.email,this.password,this.username).subscribe(s=>this.router.navigate(['/']),e=>(this.error = e));
  }
}