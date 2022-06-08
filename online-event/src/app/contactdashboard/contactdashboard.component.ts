import { Component, OnInit } from '@angular/core';
import { Apiservice1Service } from '../apiservice1.service';
@Component({
  selector: 'app-contactdashboard',
  templateUrl: './contactdashboard.component.html',
  styleUrls: ['./contactdashboard.component.css']
})
export class ContactdashboardComponent implements OnInit {
  data: any;
  response: any;
  formGroup: any;
  totalUseage: any;
  alluserData: any;
  alluser: any;
  empRecord: any;

  constructor(private api: Apiservice1Service) {
    this.saving( )
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
           "createdOnDateAndTime": "desc"
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
    });
    
    
    }
    }