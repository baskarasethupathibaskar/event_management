import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, NgForm } from '@angular/forms';
import { Apiservice1Service } from '../apiservice1.service';
// import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import * as XLSX from 'xlsx';

@Component({
  selector: 'app-feedback1',
  templateUrl: './feedback1.component.html',
  styleUrls: ['./feedback1.component.css']
})
export class Feedback1Component implements OnInit {
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
  this.saving( )
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

  saving( ) {
    //   console.log("from form", Formvalue);
    //   this.api.storeData1(Formvalue).subscribe((data) => {
    //    console.log("data returned from server", data);
    //   })
    //  }
    
    let data = {
      selector: {
        type: "feedback"
      },
      "sort": [
         {
            "createdBy": "desc"
         }
      ]
    }

    // //angular to couch POST
    //  this.api.add("online_management", formData).subscribe(res => {
    //   console.log(res);
    //   // alert("Your event booked successfully!");
    //   console.log('basco')
    //   this.FeedForm.reset();
    // }, rej => {
    //   // alert("opps! Can not post data" + rej);
    // });
    
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