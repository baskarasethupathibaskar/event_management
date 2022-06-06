import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder} from '@angular/forms';
import { Apiservice1Service } from '../apiservice1.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-packagedash1',
  templateUrl: './packagedash1.component.html',
  styleUrls: ['./packagedash1.component.css']
})
export class Packagedash1Component implements OnInit {
  PackageForm: FormGroup;
  userRecord: any = {
    event1: '',
    amount1: '',
    service1: '',
  };
  data: any;
  formGroup: any;
  totalUseage: any;
  alluserData: any;
  alluser: any;
  empRecord: any;
  constructor(private fb: FormBuilder, private api: Apiservice1Service, private router:Router) {
    this.saving( )
    this.PackageForm = this.fb.group({
      event1: [this.userRecord.event1],
      amount1: [this.userRecord.amount1],
      service1: [this.userRecord.service1],
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
  get event1() {
    return this.PackageForm.get('event1')!;
  }
  get amount1() {
    return this.PackageForm.get('amount1')!;
  }
  get service1() {
    return this.PackageForm.get('service1')!;
  }

  saving() {
    
    let data = {
      selector: {
        type: "package"
      },
      "sort": [
         {
            "createdBy": "desc"
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
      this.empRecord.reset();
    });
    
    
    }
    }