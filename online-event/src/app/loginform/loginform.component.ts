import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { APIserviceService } from '../apiservice.service';
import { Router } from '@angular/router';

// import { basename } from 'path';
// import { generateKeyPair } from 'crypto';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  loginForm!: FormGroup;

 
 constructor(private fb: FormBuilder, private api: APIserviceService, private router:Router) {}

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
      this.router.navigate(['admin'],{
      })
    }
   console.log("data returned from server", data);
  })
  alert('please enter your id & password')
 }
}

