import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, NgForm } from '@angular/forms';
import { Apiservice1Service } from '../apiservice1.service';
// import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import * as XLSX from 'xlsx';
@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
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
  constructor(private fb: FormBuilder, private api: Apiservice1Service, private router:Router) {
    this.saving( )
    this.PackageForm = this.fb.group({
      event1: [this.userRecord.event1],
      amount1: [this.userRecord.amount1],
      service1: [this.userRecord.service1],
    });
  }

  ngOnInit(): void {
  }
  get event1() {
    return this.PackageForm.get('event1')!;
  }
  get amount1() {
    return this.PackageForm.get('amount1')!;
  }
  get service1() {
    return this.PackageForm.get('service1')!;
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
    //   this.PackageForm.reset();
    // }, rej => {
    //   // alert("opps! Can not post data" + rej);
    // });

    
    let data = {
      selector: {
        type: "package"
      }
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