import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, NgForm } from '@angular/forms';
import { Apiservice1Service } from '../apiservice1.service';
// import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import * as XLSX from 'xlsx';
@Component({
  selector: 'app-imgdash1',
  templateUrl: './imgdash1.component.html',
  styleUrls: ['./imgdash1.component.css']
})
export class Imgdash1Component implements OnInit {
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
  }
  get upload() {
    return this.imgForm.get('upload')!;
  }
  

  saving() {
    //   console.log("from form", Formvalue);
    //   this.api.storeData1(Formvalue).subscribe((data) => {
    //    console.log("data returned from server", data);
    //   })
    //  }
    
    // //angular to couch POST
    //  this.api.add("online_management", formData).subscribe(res => {
    //   console.log(res);
    //   // alert("thanks to give your feedback!");
    //   console.log('basco')
    //   this.imgForm.reset();
    // }, rej => {
    //   // alert("opps! Can not post data" + rej);
    // });
    
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
      // this.router.navigate(['packdash1'])
      this.alluser=res;
      console.log(res);
      this.alluser = this.alluser.docs;
      this.alluserData = this.alluser
      // .map((el: any)=>el.doc);
      console.log(this.alluserData[0]);
      for (const array in this.alluserData) {
        console.log(this.alluserData[array])
      }
      // alert("Your data was get successfully!");
      this.empRecord.reset();
    }, rej => {
      // alert("opps! Can not post data" + rej);
    });
    
    // // get the data by using particular id
    // this.api.getDocsByID("online_management"," ").subscribe(res => {
    //   //  console.log(res);
    //    var temp=res;
    //    console.log(temp);
    //   //  alert("One ID got from database");
    //    this.empRecord.reset();
    //  },rej=>{
    //   //  alert("404"+rej);
    //  });
    
    }
    }