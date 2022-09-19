import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  
  //Data
  Users: Object | undefined;

  //Constructor
  constructor(private http: HttpClient) { }

  //Methods
  getUsers() {
    this.http.get('https://localhost:50188/api/Users').subscribe((result => { console.log(result) }))
  }

  ngOnInit(): void {
  }

}
