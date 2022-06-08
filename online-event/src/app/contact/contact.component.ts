import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Apiservice1Service } from '../apiservice1.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  AppService: any;
  static find: any;
  array: any = [];
  userRecord: any = {
    name: '',
    email: '',
    mobile: '',
    aadhaar: '',
    address: '',
  };
  data: any;
  response: any;
  formGroup: any;
  totalUseage: any;
  alluserData: any;
  alluser: any;
  empRecord: any;

  constructor(
    private toast: ToastrService,
    private fb: FormBuilder,
    private api: Apiservice1Service,
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      aadhaar: [
        '',
        [
          Validators.required,
          Validators.minLength(12),
          Validators.maxLength(12),
        ],
      ],
      address: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    console.log('contact');
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
  get aadhaar() {
    return this.contactForm.get('aadhaar')!;
  }

  saving(Formvalue: any) {
    const d = new Date();
    const event = {
      name: Formvalue.name,
      email: Formvalue.email,
      mobile: Formvalue.mobile,
      aadhaar: Formvalue.aadhaar,
      address: Formvalue.address,
      type: 'event',
      createdOnDateAndTime: d,
    };

    //angular to couch POST
    this.api.add('online_management', event).subscribe(
      (_res) => {
        this.toast.success('data send to admin successfully');
        this.contactForm.reset();
      },
      (_rej) => {
        this.toast.error('data Failed to send');
      }
    );
  }
}
