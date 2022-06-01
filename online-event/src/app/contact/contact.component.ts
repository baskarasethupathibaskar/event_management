import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, NgForm ,Validators} from '@angular/forms';
import { Apiservice1Service } from '../apiservice1.service';
import { Router } from '@angular/router';
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
      name:['',Validators.required],
      email:['',Validators.required],
      mobile:['',Validators.required],
      adhar:['',Validators.required],
      address:['',Validators.required],

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

  saving(Formvalue: any) {
   
    const d = new Date();
    const event = {
      name: Formvalue.name,
      email: Formvalue.email,
      mobile: Formvalue.mobile,
      adhar: Formvalue.adhar,
      address: Formvalue.address,
      type: "event",
      createdBy:d

    }

    //angular to couch POST
     this.api.add("online_management", event).subscribe(res => {
      this.contactForm.reset();
    }, rej => {
    });
    
    }
    }