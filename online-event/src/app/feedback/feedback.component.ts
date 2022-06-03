import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import { Apiservice1Service } from '../apiservice1.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements OnInit {
  FeedForm: FormGroup;
  userRecord: any = {
    name1: '',
    event: '',
    comment: '',
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
    this.FeedForm = this.fb.group({
      name1: ['', Validators.required],
      event: ['', Validators.required],
      comment: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  get name1() {
    return this.FeedForm.get('name1')!;
  }
  get event() {
    return this.FeedForm.get('event')!;
  }
  get comment() {
    return this.FeedForm.get('comment')!;
  }

  saving(Formvalue: any) {
    const d = new Date();
    const feed = {
      name1: Formvalue.name1,
      event: Formvalue.event,
      comment: Formvalue.comment,
      type: 'feedback',
      createdBy: d,
    };

    //angular to couch POST
    this.api.add('online_management', feed).subscribe(
      (_res) => {
        this.toast.success('thanks for your feedback');
        this.FeedForm.reset();
      },
      (_rej) => {
        this.toast.error('feedback failed to send');
      }
    );
  }
}
