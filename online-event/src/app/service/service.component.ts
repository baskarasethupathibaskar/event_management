import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Apiservice1Service } from '../apiservice1.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  eForm: FormGroup;
  userRecord: any = {
    ename: '',
    ereview: '',
    eamount: '',
  };
  data: any;
  formGroup: any;
  totalUseage: any;
  alluserData: any;
  alluser: any;
  empRecord: any;
  constructor(private fb: FormBuilder, private api: Apiservice1Service, private router:Router) {
   this.saving()

    this.eForm = this.fb.group({
      ename: [this.userRecord.ename],
      ereview: [this.userRecord.ereview],
      eamount: [this.userRecord.eamount],
    });
  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  
  }
  get ename() {
    return this.eForm.get('ename')!;
  }
  get ereview() {
    return this.eForm.get('ereview')!;
  }
  get eamount() {
    return this.eForm.get('eamount')!;
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
      console.log(res);
      this.alluser = this.alluser.docs;
      this.alluserData = this.alluser
      console.log(this.alluserData[0]);
      for (const array in this.alluserData) {
        console.log(this.alluserData[array])
      }
      this.empRecord.reset();
    }, _rej => {
      // TODO document why this arrow function is empty
    
    });
    
    
    }
    }