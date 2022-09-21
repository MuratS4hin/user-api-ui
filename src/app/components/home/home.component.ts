import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from 'src/app/models/user.model';
import { CdkTableDataSourceInput } from '@angular/cdk/table';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  //Data
  dataSource: any;
  // reqId: string | undefined;
  displayedColumns: string[] = ['name', 'email', 'birthday', 'userRole', 'GetUsersInfo', 'UpdateUser', 'DeleteUser'];
  userById: any;
  //Constructor
  constructor(private http: HttpClient) { }

  //Methods
  // getUsers() {
  //   this.http.get('https://localhost:50188/api/Users').subscribe((result => { 
  //     console.log(result) 
  //     this.dataSource = result;
  //   }))
  // }

  getUsersById(id: any) {
    this.http.get('https://localhost:50188/api/Users/' +id).subscribe((result => { 
      console.log(result) 
      this.userById = result;
    }))
  }

  ngOnInit(): void {
    this.http.get('https://localhost:50188/api/Users').subscribe((result => { 
      console.log(result) 
      this.dataSource = result;
    }))
  }

}
