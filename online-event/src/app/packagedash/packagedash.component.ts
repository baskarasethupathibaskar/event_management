import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Apiservice1Service } from '../apiservice1.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-packagedash',
  templateUrl: './packagedash.component.html',
  styleUrls: ['./packagedash.component.css'],
})
export class PackagedashComponent {
  packageForm: FormGroup;
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
    private toast: ToastrService,
    private fb: FormBuilder,
    private api: Apiservice1Service,
    private router: Router
  ) {
    this.packageForm = this.fb.group({
      event1: ['', Validators.required],
      amount1: ['', Validators.required],
      service1: ['', Validators.required],
    });
  }
  

  get event1() {
    return this.packageForm.get('event1')!;
  }
  get amount1() {
    return this.packageForm.get('amount1')!;
  }
  get service1() {
    return this.packageForm.get('service1')!;
  }

  saving(Formvalue: any) {
    const d = new Date();
    const package1 = {
      event1: Formvalue.event1,
      service1: Formvalue.service1,
      amount1: Formvalue.amount1,
      type: 'package',
      createdOnDateAndTime: d,
    };

    //angular to couch POST
    this.api.add('online_management', package1).subscribe(
      (_res) => {
        this.toast.success('package updated successfully');
        this.router.navigate(['packdash1']);
        this.packageForm.reset();
      },
      (_rej) => {
        this.toast.error('package failed to update');
      }
    );
  }
}
