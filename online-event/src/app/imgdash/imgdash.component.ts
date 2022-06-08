import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Apiservice1Service } from '../apiservice1.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-imgdash',
  templateUrl: './imgdash.component.html',
  styleUrls: ['./imgdash.component.css'],
})
export class ImgdashComponent implements OnInit {
  imgForm: FormGroup;
  userRecord: any = {
    upload: '',
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
    this.imgForm = this.fb.group({
      upload: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  get upload() {
    return this.imgForm.get('upload')!;
  }

  saving(Formvalue: any) {
    const d = new Date();
    const img = {
      upload: Formvalue.upload,
      type: 'imgupdate',
      createdBy: d,
    };

    //angular to couch POST
    this.api.add('online_management', img).subscribe(
      (_res) => {
        this.toast.success('image added sucessfully');
        this.imgForm.reset();
        this.router.navigate(['imgupload1']);
      },
      (_rej) => {
        this.toast.error('image failed to add');
      }
    );
  }
}
