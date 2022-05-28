import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, NgForm } from '@angular/forms';
import { Apiservice1Service } from '../apiservice1.service';
// import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import * as XLSX from 'xlsx';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  AppService: any;
  static find: any;
  array:any = [];
  userRecord: any = {
  name: '',
  email: '',
  mobile: '',
  adhar: '',
  address: '',
 };
  data: any;
  response: any;
  formGroup: any;
  totalUseage: any;
  alluserData: any;
  alluser: any;
  empRecord: any;

  constructor(private fb: FormBuilder, private api: Apiservice1Service, private router:Router) {

    this.contactForm = this.fb.group({
      name: [this.userRecord.name],
      email: [this.userRecord.email],
      mobile: [this.userRecord.mobile],
      adhar: [this.userRecord.adhar],
      address: [this.userRecord.address],
    });
  }

  ngOnInit(): void {

  }
  get name() {
    return this.contactForm.get('name')!;
  }
  get address() {
    return this.contactForm.get('address')!;
  }
  get email() {
    return this.contactForm.get('email')!;
  }
  get mobile() {
    return this.contactForm.get('mobile')!;
  }
  get adhar() {
    return this.contactForm.get('adhar')!;
  }

  saving(formData: NgForm) {
    //   console.log("from form", Formvalue);
    //   this.api.storeData1(Formvalue).subscribe((data) => {
    //    console.log("data returned from server", data);
    //   })
    //  }
    
    //angular to couch POST
     this.api.add("online_management", formData).subscribe(res => {
      //  this.router.navigate(['cdash/'])
      console.log(res);
      alert("Your Details Added successfully!");
      console.log('basco')
      this.contactForm.reset();
    }, rej => {
      // alert("opps! Can not post data" + rej);
    });
    
    //get the all data
    this.api.get("online_management").subscribe(res => {
      this.alluser=res;
      console.log(res);
      this.alluser = this.alluser.rows;
      this.alluserData = this.alluser.map((el: any)=>el.doc);
      console.log(this.alluserData[0]);
      for (const array in this.alluserData) {
        console.log(this.alluserData[array])
      }
      // alert("Your data was get successfully!");
      this.empRecord.reset();
    }, rej => {
      // alert("opps! Can not post data" + rej);
    });
    
    // get the data by using particular id
    this.api.getDocsByID("online_management","ecb83221a3496d8815d5c195441742ac").subscribe(res => {
      //  console.log(res);
       var temp=res;
       console.log(temp);
      //  alert("One ID got from database");
       this.empRecord.reset();
     },rej=>{
      //  alert("404"+rej);
     });
    
    }
    }