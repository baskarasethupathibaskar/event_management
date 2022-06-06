import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Apiservice1Service } from '../apiservice1.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
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
   this.saving()
    this.imgForm = this.fb.group({
      upload: [this.userRecord.upload],
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
  get upload() {
    return this.imgForm.get('upload')!;
  }
  

  saving() {
    
    let data = {
      selector: {
        type: "imgupdate"
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
      console.log(res);
      this.alluser = this.alluser.docs;
      this.alluserData = this.alluser
      // .map((el: any)=>el.doc);
      console.log(this.alluserData[0]);
      for (const array in this.alluserData) {
        console.log(this.alluserData[array])
      }
      this.empRecord.reset();
    }, _rej => {
      // TODO document why this arrow function is empty
    
    });
    
    }
    }