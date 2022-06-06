import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Apiservice1Service } from '../apiservice1.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  packageForm: FormGroup;
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
    this.packageForm = this.fb.group({
      event1: [this.userRecord.event1],
      amount1: [this.userRecord.amount1],
      service1: [this.userRecord.service1],
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
  get event1() {
    return this.packageForm.get('event1')!;
  }
  get amount1() {
    return this.packageForm.get('amount1')!;
  }
  get service1() {
    return this.packageForm.get('service1')!;
  }

  saving() {
    
    
    let data = {
      selector: {
        type: "package"
      }
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