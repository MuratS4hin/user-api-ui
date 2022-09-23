import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from 'src/app/models/user.model';
import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { UserService } from 'src/app/services/user.service';

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
  displayedColumns: string[] = ['name', 'email', 'birthday', 'userRole', 'GetUsersInfo', 'UpdateUser', 'DeleteUser', "Docs"];

  UserRole: any;
  Username: any;
  Password: any;
  Email: any;
  Birthday: any

  userById: any;
  update = false;
  updatedUser: any;
  create = false;

  /*data for docs*/
  addDocument = true;
  UserId: any;
  Files: any;

  /*--------------- Glowing Effect of Welcome Text ---------------*/
  letter = "WELCOME";
  @ViewChild("myNameElem") title: ElementRef | undefined;
  flickerLetter = (letter: any) => `<span style="animation: text-flicker-in-glow ${Math.random() * 4}s linear both ">${letter}</span>`
  colorLetter = (letter: any) => `<span style="color: hsla(${Math.random() * 360}, 100%, 80%, 1);">${letter}</span>`;
  flickerAndColorText = (text: string) =>
    text
      .split('')
      .map(this.flickerLetter)
      .map(this.colorLetter)
      .join('');
  neonGlory = (target: { innerHTML: any; textContent: any; }) => target.innerHTML = this.flickerAndColorText(target.textContent);
  /*--------------------------------------------------------------*/

  //Constructor
  constructor(private http: HttpClient, private userService: UserService) { }

  //Methods
  ngOnInit(): void {
    this.http.get('https://localhost:50188/api/Users').subscribe((result => {
      this.dataSource = result;
      this.neonGlory(this.title?.nativeElement); //Glowing Effect's function called here
    }))
  }

  getUsersById(id: any) {
    this.http.get('https://localhost:50188/api/Users/' + id).subscribe((result => {
      this.userById = result;
    }))
    console.log(this.title)
  }

  updateUser() {
    this.http.put('https://localhost:50188/api/Users/' + this.updatedUser.id, { name: this.Username, password: this.Password, email: this.Email, birthday: this.Birthday, usersRole: this.UserRole }).subscribe((result => {
      this.userById = result;
      window.location.reload();
    }))
  }

  deleteUser(id: any) {
    this.http.delete('https://localhost:50188/api/Users/' + id, {}).subscribe((result => {
      window.location.reload();
    }))
  }

  createUser(){
    this.http.post('https://localhost:50188/api/Users/', { name: this.Username, password: this.Password, email: this.Email, birthday: this.Birthday, usersRole: this.UserRole }).subscribe((result => {
      window.location.reload();
    }))
  }

  addDocuments(files: any, id: any){
    this.http.post("https://localhost:50188/api/Documents/Upload", {Files: files, Id:id}).subscribe((result => {
      window.location.reload();
    }))
  }

  closeAllTabs() {
    this.update = false;
    this.userById = undefined;
    this.create = false;
    this.addDocument = false;
  }

}
