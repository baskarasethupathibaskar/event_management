import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, NgForm } from '@angular/forms';
import { Apiservice1Service } from '../apiservice1.service';
// import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import * as XLSX from 'xlsx';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
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
  constructor(private fb: FormBuilder, private api: Apiservice1Service, private router:Router) {
    this.FeedForm = this.fb.group({
      name1: [this.userRecord.name1],
      event: [this.userRecord.event],
      comment: [this.userRecord.comment],
    });
  }

  ngOnInit(): void {

  }
  get name1() {
    return this.FeedForm.get('name1')!;
  }
  get event() {
    return this.FeedForm.get('event')!;
  }
  get comment() {
    return this.FeedForm.get('comment')!;
  }

  saving(formData: NgForm) {
    //   console.log("from form", Formvalue);
    //   this.api.storeData1(Formvalue).subscribe((data) => {
    //    console.log("data returned from server", data);
    //   })
    //  }
    
    //angular to couch POST
     this.api.add("online_management", formData).subscribe(res => {
      console.log(res);
      // alert("thanks to give your feedback!");
      console.log('basco')
      this.FeedForm.reset();
    }, rej => {
      // alert("opps! Can not post data" + rej);
    });
    
    //get the all data
    this.api.get("online_management").subscribe(res => {
      // this.router.navigate(['feedback1'])
      this.alluser=res;
      console.log(res);
      this.alluser = this.alluser.rows;
      this.alluserData = this.alluser.map((el: any)=>el.doc);
      console.log(this.alluserData[0]);
      for (const array in this.alluserData) {
        console.log(this.alluserData[array])
      }
      // alert("Your data was get successfully!");
      this.empRecord.reset();
    }, rej => {
      // alert("opps! Can not post data" + rej);
    });
    
    // get the data by using particular id
    this.api.getDocsByID("online_management"," ").subscribe(res => {
      //  console.log(res);
       var temp=res;
       console.log(temp);
      //  alert("One ID got from database");
       this.empRecord.reset();
     },rej=>{
      //  alert("404"+rej);
     });
    
    }
    }