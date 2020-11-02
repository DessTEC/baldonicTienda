import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators, NgControl, FormControl} from '@angular/forms';
import {ContactModel} from '../../models/contact.model'
import {ContactService} from '../../services/contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: ContactModel= {
    name:"",
    email:"",
    message:"",
    check: false
  };

  contactForm: FormGroup;
  constructor(private formBuilder:FormBuilder, private contactService:ContactService) { }

  ngOnInit(): void {
    this.contactForm=this.formBuilder.group({
      'name':[this.contact.name,[Validators.required]],
      'email':[this.contact.email,[Validators.required,Validators.email]],
      'message':[this.contact.message,[Validators.required]],
      'check' : [this.contact.check, [Validators.requiredTrue]]
    });
  }

  getErrorMessageName(){
    if(this.contactForm.controls['name'].hasError('required')){
      return 'You must enter a value';
    }
  }

  getErrorMessageEmail(){
    if(this.contactForm.controls['email'].hasError('required')){
      return 'You must enter a value';
    }
    return this.contactForm.controls['email'].hasError('email') ? 'Not a valid email' : '';
  }

  sendEmail(){
    this.contactService.contactMail(this.contact.name,this.contact.email,this.contact.message).subscribe((respuesta)=>{
      console.log(respuesta.data);
    },
    (error)=>{
      console.log("MI ",error);
    });
    for (const field in this.contactForm.controls) { 
      const control = this.contactForm.get(field); 
      control.reset();
      control.markAsPristine();
      control.markAsUntouched();
      control.updateValueAndValidity();
    }

  }

}
