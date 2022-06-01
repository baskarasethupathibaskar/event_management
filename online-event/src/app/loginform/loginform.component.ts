import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { APIserviceService } from '../apiservice.service';
import { Apiservice1Service } from '../apiservice1.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  loginForm!: FormGroup;

 
 constructor(private fb: FormBuilder, private apii: Apiservice1Service,private api: APIserviceService, private router:Router) {}

 ngOnInit(): void {
  this.loginForm = this.fb.group({
    userid: ['',Validators.required],
    password: ['',Validators.required],
    
  });
 }
 get userid() {
  return this.loginForm.get('userid');
 }
 get password() {
  return this.loginForm.get('password');
 }
 
 saving(Formvalue: any) {
  console.log("from form", Formvalue);
  this.api.storeData2(Formvalue).subscribe((data) => {
    if(data.docs.length > 0){
      this.apii.showoff();
      this.router.navigate(['admin'],{
      })
    }
   console.log("data returned from server", data);
  })
 }
}

