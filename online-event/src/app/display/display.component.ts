import { Component, OnInit } from '@angular/core';
import { Apiservice1Service } from '../apiservice1.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
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
   console.log("payment component is working")
 }

saving( ) {

let data = {
  selector: {
    type: "pay"
  },
  "sort": [
     {
        "createdOnDateAndTime": "desc"
     }
  ]
}

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