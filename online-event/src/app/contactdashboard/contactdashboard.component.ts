import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { Apiservice1Service } from '../apiservice1.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contactdashboard',
  templateUrl: './contactdashboard.component.html',
  styleUrls: ['./contactdashboard.component.css']
})
export class ContactdashboardComponent implements OnInit {
  alluserData: any;
  empRecord: any;
  alluser: any;
  constructor(private fb: FormBuilder, private api: Apiservice1Service, private router:Router) {
  }

  ngOnInit(): void {
    this.saving()
  }
  saving( ) {
     let data = {
      selector: {
        type: "event"
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