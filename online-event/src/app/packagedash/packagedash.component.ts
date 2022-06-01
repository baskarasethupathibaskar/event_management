import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm , Validators } from '@angular/forms';
import { Apiservice1Service } from '../apiservice1.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-packagedash',
  templateUrl: './packagedash.component.html',
  styleUrls: ['./packagedash.component.css'],
})
export class PackagedashComponent implements OnInit {
  PackageForm: FormGroup;
  userRecord: any = {
    event1: '',
    amount1: '',
    service1: '',
  };
  data: any;
  formGroup: any;
  totalUseage: any;
  alluserData: any;
  alluser: any;
  empRecord: any;
  constructor(
    private fb: FormBuilder,
    private api: Apiservice1Service,
    private router: Router
  ) {
    this.PackageForm = this.fb.group({
      event1: ['', Validators.required],
      amount1: ['', Validators.required],
      service1: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  get event1() {
    return this.PackageForm.get('event1')!;
  }
  get amount1() {
    return this.PackageForm.get('amount1')!;
  }
  get service1() {
    return this.PackageForm.get('service1')!;
  }

  saving(Formvalue: any) {
    
    const d = new Date();
    const package1 = {
      event1: Formvalue.event1,
      service1: Formvalue.service1,
      amount1: Formvalue.amount1,
      type: 'package',
      createdBy:d
    };

    //angular to couch POST
    this.api.add('online_management', package1).subscribe(
      (res) => {
        this.router.navigate(['packdash1']);
        console.log('basco');
        this.PackageForm.reset();
      },
      (rej) => {
      }
    );

   
  }
}
