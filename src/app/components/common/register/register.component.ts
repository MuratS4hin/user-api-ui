import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  //Data
  loading = false;
  submitted = false;

  constructor() { }
  ngOnInit(): void {
  }

  //Methods

  onSubmit() {
    this.submitted = true;
  }
}
