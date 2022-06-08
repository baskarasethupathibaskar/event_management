import { Component, OnInit } from '@angular/core';
import { Apiservice1Service } from '../apiservice1.service';
@Component({
  selector: 'app-eventupdate1',
  templateUrl: './eventupdate1.component.html',
  styleUrls: ['./eventupdate1.component.css']
})
export class Eventupdate1Component implements OnInit {
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
    throw new Error('Method not implemented.');
  }

  
  saving( ) {
    
    let data = {
      selector: {
        type: "eventupdate"
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
    });
    
    
    }
    }