import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, NgForm ,Validators} from '@angular/forms';
import { Apiservice1Service } from '../apiservice1.service';
// import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import * as XLSX from 'xlsx';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentForm: FormGroup;
  AppService: any;
  static find: any;
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

 
  this.paymentForm = this.fb.group({
   name:['',Validators.required],
   email:['',Validators.required],
   location:['',Validators.required],
   service:['',Validators.required],
   date:['',Validators.required],
   category:['',Validators.required],
   bank:['',Validators.required],
   ifsc:['',Validators.required],
   amount:['',Validators.required],

  
  });
 }

 ngOnInit(): void {
   console.log("payment component is working")
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

 saving(Formvalue: any) {
//   console.log("from form", Formvalue);
//   this.api.storeData1(Formvalue).subscribe((data) => {
//    console.log("data returned from server", data);
//   })
//  }
const d = new Date();
const payment = {
  name: Formvalue.name,
  email: Formvalue.email,
  service: Formvalue.service,
  location: Formvalue.location,
  date: Formvalue.date,
  category: Formvalue.category,
  bank: Formvalue.bank,
  amount: Formvalue.amount,
  ifsc: Formvalue.ifsc,
  type: "pay",
  createdBy:d


}

//angular to couch POST
 this.api.add("online_management", payment).subscribe(res => {
  console.log(res);
  // alert("Your event booked successfully!");
  console.log('basco')
  this.paymentForm.reset();
}, rej => {
  // alert("opps! Can not post data" + rej);
});

// //get the all data
// this.api.get("pay").subscribe(res => {
//   this.alluser=res;
//   console.log(res);
//   this.alluser = this.alluser.rows;
//   this.alluserData = this.alluser.map((el: any)=>el.doc);
//   console.log(this.alluserData[0]);
//   for (const array in this.alluserData) {
//     console.log(this.alluserData[array])
//   }
//   // alert("Your data was get successfully!");
//   this.empRecord.reset();
// }, rej => {
//   // alert("opps! Can not post data" + rej);
// });

// // get the data by using particular id
// this.api.getDocsByID("pay","ecb83221a3496d8815d5c195441742ac").subscribe(res => {
//   //  console.log(res);
//    var temp=res;
//    console.log(temp);
//   //  alert("One ID got from database");
//    this.empRecord.reset();
//  },rej=>{
//   //  alert("404"+rej);
//  });

}
}