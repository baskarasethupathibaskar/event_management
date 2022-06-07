import { Component} from '@angular/core';
import { Apiservice1Service } from '../apiservice1.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {

  data: any;
  formGroup: any;
  totalUseage: any;
  alluserData: any;
  alluser: any;
  empRecord: any;
  constructor(private api: Apiservice1Service) {
  this.saving( )
   
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 
 
  saving( ) {
    
    
    let data = {
      selector: {
        type: "feedback"
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
      this.empRecord.reset();
    });
    
    
    }
    }