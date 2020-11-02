import { Component, OnInit } from '@angular/core';
import {RegisterModel} from '../../models/register.model';
import {SignUp} from '../../services/signUp.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {LogIn} from '../../services/logIn.service';
import {LoginData} from '../../models/login'

const hasNumber = /\d/;
const hasLetter = /[a-zA-Z]/g;
const specialChar = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  
  Newuser: RegisterModel= {
    name:"",
    email:"",
    password:""
  };
  registerForm: FormGroup;

  Existuser: LoginData= {
    email:"",
    password:""
  };

  loginForm: FormGroup;

  hideL=true;
  hideR=true;
  
  constructor(private formBuilder:FormBuilder,private apiservice:SignUp, private authservice:LogIn) { }
  
  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      'name':[this.Newuser.name,[Validators.required]],
      'email':[this.Newuser.email,[Validators.required,Validators.email]],
      'password':[this.Newuser.password,[Validators.required,Validators.minLength(10),Validators.maxLength(15),Validators.pattern(hasNumber),Validators.pattern(hasLetter),Validators.pattern(specialChar)]]
    });

    this.loginForm=this.formBuilder.group({
      'email':[this.Existuser.email,[Validators.required,Validators.email]],
      'password':[this.Existuser.password,[Validators.required,Validators.minLength(6),Validators.maxLength(30)]]
    });

  }

  getErrorMessageNameR(){
    if(this.registerForm.controls['name'].hasError('required')){
      return 'You must enter a value';
    }
  }

  getErrorMessageEmailR(){
    if(this.registerForm.controls['email'].hasError('required')){
      return 'You must enter a value';
    }
    return this.registerForm.controls['email'].hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessagePasswordR(){
    return this.registerForm.controls['password'].hasError('required') ? 'You must enter a value' : 'Password must be between 10 to 15 characters long, have a number,a letter and a special character';
  }


  saveR(){
    this.apiservice.signUp(this.Newuser.name,this.Newuser.email,this.Newuser.password).subscribe((respuesta)=>{
      console.log(respuesta.data);
    },
    (error)=>{
      console.log("MI ",error);
    });
  }

      getErrorMessageEmailL(){
        if(this.loginForm.controls['email'].hasError('required')){
          return 'You must enter a value';
        }
        return this.loginForm.controls['email'].hasError('email') ? 'Not a valid email' : '';
      }
    
      getErrorMessagePasswordL(){
        return this.loginForm.controls['password'].hasError('required') ? 'You must enter a value' : 'Password must be between 10 to 15 characters long, have a number, a letter and a special character';
      }
    
    saveL(){
      this.authservice.signIn(this.Existuser.email,this.Existuser.password).subscribe((respuesta)=>{
        console.log(respuesta);
        localStorage.setItem("token",respuesta);
        this.authservice.login();
      },
      (error)=>{
        console.log("El ",error);
      });
    }



}
