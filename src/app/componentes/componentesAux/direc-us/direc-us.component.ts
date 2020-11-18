import { Component, OnInit } from '@angular/core';
import {DirecModel} from '../../../models/direc.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-direc-us',
  templateUrl: './direc-us.component.html',
  styleUrls: ['./direc-us.component.css']
})
export class DirecUsComponent implements OnInit {

  direccion: DirecModel= {
    street: "",
    city: "",
    state: "",
    zip_code: "",
    country: "",
    phone_number: 0,
    instructions: ""
  }

  direcForm: FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.direcForm=this.formBuilder.group({
      'street':[this.direccion.street,[Validators.required]],
      'city':[this.direccion.city,[Validators.required]],
      'state':[this.direccion.state,[Validators.required]],
      'zip_code':[this.direccion.zip_code,[Validators.required]],
      'country':[this.direccion.country,[Validators.required]],
      'phone_number':[this.direccion.phone_number,[Validators.required]],
      'instructions':[this.direccion.instructions]
    });
  }

  show(){
    console.log(this.direccion);
  }

}
