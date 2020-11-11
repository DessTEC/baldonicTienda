import { Component, OnInit } from '@angular/core';
import {CuentaModel} from '../../models/cuenta.model';
import {NameModel} from '../../models/name.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {

  user: CuentaModel= {
    oldPass:"",
    password:"",
    passCon:""
  };

  name: NameModel= {
    newName:""
  }

  changeForm: FormGroup;
  nombreForm: FormGroup;

  constructor(private formBuilder:FormBuilder) { }
  hide=true;
  hideC=true;

  ngOnInit(): void {
    this.changeForm=this.formBuilder.group({
      'oldPass' : [this.user.oldPass, [Validators.required]],
      'password':[this.user.password,[Validators.required,Validators.minLength(10),Validators.maxLength(15)]],
      'passCon' :[this.user.passCon,[Validators.required,Validators.minLength(10),Validators.maxLength(15)]]
    });
    this.nombreForm=this.formBuilder.group({
      'newName' : [this.name.newName, [Validators.required]],
    });
  }

}