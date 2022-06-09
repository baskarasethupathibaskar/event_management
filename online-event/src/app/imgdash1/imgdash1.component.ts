import { Component } from '@angular/core';
import { Apiservice1Service } from '../apiservice1.service';
@Component({
  selector: 'app-imgdash1',
  templateUrl: './imgdash1.component.html',
  styleUrls: ['./imgdash1.component.css']
})
export class Imgdash1Component {
  data: any;
  formGroup: any;
  totalUseage: any;
  alluserData: any;
  alluser: any;
  empRecord: any;
  constructor(private api: Apiservice1Service) {
   this.saving()
  }
  
  saving() {
    
    let data = {
      selector: {
        type: "imgupdate"
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