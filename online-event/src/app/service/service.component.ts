import { Component, OnInit } from '@angular/core';
import { Apiservice1Service } from '../apiservice1.service';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  data: any;
  formGroup: any;
  totalUseage: any;
  alluserData: any;
  alluser: any;
  empRecord: any;
  constructor(private api: Apiservice1Service) {
   this.saving()
  }
  ngOnInit(): void {
    console.log('service');
  }
 
  saving( ) {
    
    let data = {
      selector: {
        type: "eventupdate"
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
      console.log(res);
      this.alluser = this.alluser.docs;
      this.alluserData = this.alluser
      console.log(this.alluserData[0]);
      for (const array in this.alluserData) {
        console.log(this.alluserData[array])
      }
    });
    
    
    }
    }