import { Component } from '@angular/core';
import { Apiservice1Service } from '../apiservice1.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public apii:Apiservice1Service) { }

}
