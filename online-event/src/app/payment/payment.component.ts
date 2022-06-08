import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Apiservice1Service } from '../apiservice1.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  paymentForm: FormGroup;
  AppService: any;
  static find: any;
  array: any = [];
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
  minDate: any;
  constructor(
    private toast: ToastrService,
    private fb: FormBuilder,
    private api: Apiservice1Service,
    private router: Router
  ) {
    this.paymentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      location: ['', Validators.required],
      service: ['', Validators.required],
      date: ['', Validators.required],
      category: ['', Validators.required],
      bank: ['', Validators.required],
      ifsc: ['', Validators.required],
      amount: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    console.log('payment component is working');
    this.setDate();
  }
  setDate() {
    let date = new Date();
    let currentDate:any = date.getDate();
    let currentMonth:any = date.getMonth()+1;
    let currentYear:any = date.getFullYear();
    if (currentDate < 10) {
      currentDate = "0" + currentDate;
    }
    if (currentMonth < 10) {
      currentMonth = "0" + currentMonth;
    }
    this.minDate = currentYear + "-" + currentMonth + "-" + currentDate;
   
    console.log(this.minDate)

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
      type: 'pay',
      createdOnDateAndTime: d,
    };

    //angular to couch POST
    this.api.add('online_management', payment).subscribe(
      (_res) => {
        this.toast.success('Event Booked successfully');
        this.paymentForm.reset();
      },
      (_rej) => {
        this.toast.error('Event Failed to booked');
      }
    );
  }
}
