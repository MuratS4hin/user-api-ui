import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../login/login.component.scss']
})
export class LoginComponent implements OnInit {
  //Data
  Users: any;

  //Constructor
  constructor(private http: HttpClient) { }

  //Methods
  clickFunction() {
    alert("You Logged congrats")
  }

  ngOnInit(): void { }
}
