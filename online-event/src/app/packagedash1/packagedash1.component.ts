import { Component } from '@angular/core';
import { Apiservice1Service } from '../apiservice1.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-packagedash1',
  templateUrl: './packagedash1.component.html',
  styleUrls: ['./packagedash1.component.css']
})
export class Packagedash1Component  {

  data: any;
  formGroup: any;
  totalUseage: any;
  alluserData: any;
  alluser: any;
  empRecord: any;
  constructor(private api: Apiservice1Service, private router:Router) {
    this.saving( )
    
  }
  

  saving() {
    
    let data = {
      selector: {
        type: "package"
      },
      "sort": [
         {
            "createdOnDateAndTime": "desc"
         }
      ]
    }
    
    
    //get the all data
    this.api.get(data).subscribe(res => {
      this.router.navigate(['packdash1'])
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