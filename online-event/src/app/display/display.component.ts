import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Apiservice1Service } from '../apiservice1.service';
import { Router } from '@angular/router';
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
 constructor(private fb: FormBuilder, private api: Apiservice1Service, private router:Router) {
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
        "createdBy": "desc"
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
  this.empRecord.reset();
});

}
}