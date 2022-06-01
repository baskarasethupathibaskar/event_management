import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, NgForm } from '@angular/forms';
import { Apiservice1Service } from '../apiservice1.service';
// import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import * as XLSX from 'xlsx';
@Component({
  selector: 'app-contactdashboard',
  templateUrl: './contactdashboard.component.html',
  styleUrls: ['./contactdashboard.component.css']
})
export class ContactdashboardComponent implements OnInit {
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
    this.saving( )


    this.contactForm = this.fb.group({
      name: [this.userRecord.name],
      email: [this.userRecord.email],
      mobile: [this.userRecord.mobile],
      adhar: [this.userRecord.adhar],
      address: [this.userRecord.address],
    });
  }

  ngOnInit(): void {
    this.saving()

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

  saving( ) {
   
     let data = {
      selector: {
        type: "event"
      },
      "sort": [
        {
           "createdBy": "desc"
        }
     ]
    }

    //get the all data
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