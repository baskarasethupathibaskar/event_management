import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  AppService: any;
  static find: any;
  array:any = [];
  userRecord: any = {
  name: '',
  email: '',
  location: '',
  service: '',
  date: '',
  category: '',
  bank: '',
  ifsc: '',
  amount: '',
 };

  constructor() { }

  ngOnInit(): void {
  }

}
