import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {confirmPasswordValidator} from '../confirmPasswordValidator';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // fname:string;
  // lname:string;
  // username:string;
  // password:string;
  // cpassword:string;
  // phoneno:number;
  // address:string;
  // email:string;
  registerForm =new FormGroup({
    fname:new FormControl("", [Validators.required]),
    lname:new FormControl("", [Validators.required]),
    username:new FormControl('',[Validators.required]),
    password: new FormControl("", [Validators.required, Validators.pattern(/[^0-9a-zA-Z]/), Validators.minLength(8)]),
    cpassword: new FormControl("",Validators.required),
    email:new FormControl("", [Validators.required, Validators.email]),
    address:new FormControl('',[Validators.required]),
    phoneno:new FormControl('',[Validators.required])
  },
  {
    validators:confirmPasswordValidator('password', 'cpassword')
  });

  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
  }
  register():any{
     console.log("Registering")
     console.log(this.registerForm.getRawValue());
     console.log(this.registerForm.status);
    if(!this.registerForm.valid) {
       console.log("error in register");
    }
    const user = this.registerForm.getRawValue();
    this.authService.register(user).subscribe(s=>{
      console.log(s);
      this.router.navigate(['/']); 
    });
  }
  
  get username(){
    return this.registerForm.get('username');
  }

  get email(){
    return this.registerForm.get('email');
  }
  get passsword(){
    return this.registerForm.get('passsword');
  }

  get cpasssword(){
    return this.registerForm.get('cpasssword');
  }

  get phoneno(){
    return this.registerForm.get('phoneno');
  }

}
