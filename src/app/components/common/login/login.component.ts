import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  
  //Data

  //Constructor
  constructor() { }

  //Methods
  clickFunction() {
    alert("clicked me!");
  }
 
  ngOnInit(): void {}
}
