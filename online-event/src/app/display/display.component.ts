import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, NgForm } from '@angular/forms';
import { Apiservice1Service } from '../apiservice1.service';
import { Router } from '@angular/router';
import { TypeofExpr } from '@angular/compiler';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  paymentForm: FormGroup;
  static find: any;
  autoClick:boolean=true;
  array:any = [];
  userRecord: any = {
  name: '',
  email: '',
  location: '',
  service: '',
  date: '',
  category: '',
  bank: '',
  ifsc: '',
  amount: '',
 };
  data: any;
  response: any;
  formGroup: any;
  totalUseage: any;
  alluserData: any;
  alluser: any;
  empRecord: any;
 constructor(private fb: FormBuilder, private api: Apiservice1Service, private router:Router) {
  this.saving( )

 
  this.paymentForm = this.fb.group({
   name: [this.userRecord.name],
   email: [this.userRecord.email],
   location: [this.userRecord.location],
   service: [this.userRecord.service],
   date: [this.userRecord.date],
   category: [this.userRecord.category],
   bank: [this.userRecord.bank],
   ifsc: [this.userRecord.ifsc],
   amount: [this.userRecord.amount],

  
  });
 }

 ngOnInit(): void {
   console.log("pyment compnent is working")
 }
 get name() {
  return this.paymentForm.get('name')!;
 }
 get email() {
  return this.paymentForm.get('email')!;
 }
 get service() {
  return this.paymentForm.get('service')!;
 }
 get location() {
  return this.paymentForm.get('location')!;
 }
 get date() {
  return this.paymentForm.get('date')!;
 }
 get category() {
  return this.paymentForm.get('category')!;
 }
 get bank() {
  return this.paymentForm.get('bank')!;
 }
 get ifsc() {
  return this.paymentForm.get('ifsc')!;
 }
 get amount() {
  return this.paymentForm.get('amount')!;
 }

saving( ) {

let data = {
  selector: {
    type: "pay"
  },
  "sort": [
     {
        "createdBy": "desc"
     }
  ]
}

this.api.get(data).subscribe(res => {
  this.alluser=res;
  this.alluser = this.alluser.docs;
  this.alluserData = this.alluser
  console.log(this.alluserData[0]);
  for (const array in this.alluserData) {
    console.log(this.alluserData[array])
  }
  this.empRecord.reset();
}, rej => {
});

}
}