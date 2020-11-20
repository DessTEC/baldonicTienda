
import { Component, OnInit } from '@angular/core';
import {DirecModel} from '../../../models/direc.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AccountService} from '../../../services/account.service';

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

  constructor(private formBuilder:FormBuilder, private accountService: AccountService) { }

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

  addAddress(){
    this.accountService.addAddress(this.direccion.street,this.direccion.city,this.direccion.state,this.direccion.zip_code,this.direccion.country, this.direccion.phone_number, this.direccion.instructions).subscribe((respuesta)=>{
      console.log(respuesta.data);
      alert("Dirección agregada!");
      for (const field in this.direcForm.controls) { 
        const control = this.direcForm.get(field); 
        control.reset();
        control.markAsPristine();
        control.markAsUntouched();
        control.updateValueAndValidity();
      }
    },
    (error)=>{
      console.log("MI ",error);
    });
  }

}
