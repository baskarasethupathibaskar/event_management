import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, NgForm ,Validators} from '@angular/forms';
import { Apiservice1Service } from '../apiservice1.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-imgdash',
  templateUrl: './imgdash.component.html',
  styleUrls: ['./imgdash.component.css']
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
  constructor(private fb: FormBuilder, private api: Apiservice1Service, private router:Router) {
    this.imgForm = this.fb.group({
      upload:['',Validators.required],

    });
  }

  ngOnInit(): void {
  }
  get upload() {
    return this.imgForm.get('upload')!;
  }
  

  saving(Formvalue: any) {
    
    const d = new Date();
    const img = {
      upload: Formvalue.upload,
      type: "imgupdate",
      createdBy:d

    }

    //angular to couch POST
     this.api.add("online_management", img).subscribe(res => {
      this.imgForm.reset();
    }, rej => {
    });
    
    
    }
    }