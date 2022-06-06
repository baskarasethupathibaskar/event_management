import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder} from '@angular/forms';
import { Apiservice1Service } from '../apiservice1.service';
import { Router } from '@angular/router';

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
    throw new Error('Method not implemented.');
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