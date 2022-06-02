import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import { Apiservice1Service } from '../apiservice1.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-eventupdate',
  templateUrl: './eventupdate.component.html',
  styleUrls: ['./eventupdate.component.css'],
})
export class EventupdateComponent implements OnInit {
  eForm: FormGroup;
  userRecord: any = {
    ename: '',
    ereview: '',
    eamount: '',
  };
  data: any;
  formGroup: any;
  totalUseage: any;
  alluserData: any;
  alluser: any;
  empRecord: any;
  constructor(
    private toast:ToastrService,
    private fb: FormBuilder,
    private api: Apiservice1Service,
    private router: Router
  ) {
    this.eForm = this.fb.group({
      ename: ['', Validators.required],
      ereview: ['', Validators.required],
      eamount: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  get ename() {
    return this.eForm.get('ename')!;
  }
  get ereview() {
    return this.eForm.get('ereview')!;
  }
  get eamount() {
    return this.eForm.get('eamount')!;
  }

  saving(Formvalue: any) {
    
    const d = new Date();
    const event1 = {
      ename: Formvalue.ename,
      ereview: Formvalue.ereview,
      eamount: Formvalue.eamount,
      type: 'eventupdate',
      createdBy: d,
    };

    //angular to couch POST
    this.api.add('online_management', event1).subscribe(
      (res) => {
        this.eForm.reset();
      },
      (rej) => {
      }
    );
    this.toast.success('event updated successfully');
  }
}
