import { Component, OnInit } from '@angular/core';
import {CuentaModel} from '../../models/cuenta.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {

  user: CuentaModel= {
    password:"",
    passCon:""
  };
  registerForm: FormGroup;

  constructor(private formBuilder:FormBuilder) { }
  hide=true;
  hideC=true;

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      'password':[this.user.password,[Validators.required,Validators.minLength(10),Validators.maxLength(15)]],
      'passCon' :[this.user.passCon,[Validators.required,Validators.minLength(10),Validators.maxLength(15)]]
    });
  }

}