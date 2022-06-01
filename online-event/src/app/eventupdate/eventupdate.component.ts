import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, NgForm,Validators } from '@angular/forms';
import { Apiservice1Service } from '../apiservice1.service';
// import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import * as XLSX from 'xlsx';
@Component({
  selector: 'app-eventupdate',
  templateUrl: './eventupdate.component.html',
  styleUrls: ['./eventupdate.component.css']
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
  constructor(private fb: FormBuilder, private api: Apiservice1Service, private router:Router) {
    this.eForm = this.fb.group({
      ename:['',Validators.required],
      ereview:['',Validators.required],
      eamount:['',Validators.required],
     
    });

  }

  ngOnInit(): void {
  }
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
    //   console.log("from form", Formvalue);
    //   this.api.storeData1(Formvalue).subscribe((data) => {
    //    console.log("data returned from server", data);
    //   })
    //  }
    // this.router.navigate(['eventupdate1']) 
    const d = new Date();
    const event1 = {
      ename: Formvalue.ename,
      ereview: Formvalue.ereview,
      eamount: Formvalue.eamount,
      type: "eventupdate",
      createdBy:d

    }
    //angular to couch POST
     this.api.add("online_management", event1).subscribe(res => {
      console.log(res);
      // alert("thanks to give your feedback!");
      console.log('basco')
      this.eForm.reset();
    }, rej => {
      // alert("opps! Can not post data" + rej);

    });
    
    // //get the all data
    // this.api.get("online_management").subscribe(res => {
    //   // this.router.navigate(['packdash1'])
    //   this.alluser=res;
    //   console.log(res);
    //   this.alluser = this.alluser.rows;
    //   this.alluserData = this.alluser.map((el: any)=>el.doc);
    //   console.log(this.alluserData[0]);
    //   for (const array in this.alluserData) {
    //     console.log(this.alluserData[array])
    //   }
    //   // alert("Your data was get successfully!");
    //   this.empRecord.reset();
    // }, rej => {
    //   // alert("opps! Can not post data" + rej);
    // });
    
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