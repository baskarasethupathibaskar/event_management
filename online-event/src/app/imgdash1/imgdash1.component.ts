import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Apiservice1Service } from '../apiservice1.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-imgdash1',
  templateUrl: './imgdash1.component.html',
  styleUrls: ['./imgdash1.component.css']
})
export class Imgdash1Component implements OnInit {
  data: any;
  formGroup: any;
  totalUseage: any;
  alluserData: any;
  alluser: any;
  empRecord: any;
  constructor(private fb: FormBuilder, private api: Apiservice1Service, private router:Router) {
   this.saving()
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
      this.alluser = this.alluser.docs;
      this.alluserData = this.alluser
      console.log(this.alluserData[0]);
      for (const array in this.alluserData) {
        console.log(this.alluserData[array])
      }
      this.empRecord.reset();
    });
    
   
    }
    }