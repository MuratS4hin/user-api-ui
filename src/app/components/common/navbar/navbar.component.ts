import { NgModule, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../../home/home.component';
//Module

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  //Data
  showHiddenText = false;
  password: string | undefined;
  username: string | undefined;

  //Constructor
  constructor(public dialog: MatDialog) { }

  //Methods
  public openMenu() {
    console.log("open menu");
  }

  openDialog(): void {
    this.dialog.open(LoginComponent, {
      width: '250px',
      data: { 
        name: this.username, 
        password: this.password },
    });
  }

  ngOnInit(): void {
  }
}

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent
  ],
  imports: []
})
export class a { }