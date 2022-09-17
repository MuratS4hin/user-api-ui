import { NgModule, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

//Module

@Component({
  selector: 'app-home',
  templateUrl: '../../home/home.component.html',
  styleUrls: ['../../home/home.component.scss']
})
export class HomeComponent { }

@Component({
  selector: 'app-login',
  templateUrl: '../login/login.component.html',
  styleUrls: ['../login/login.component.scss']
})
export class LoginComponent { }

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
      data: { name: this.username, animal: this.password },
    });
  }

  ngOnInit(): void {
  }
}

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent
  ],
  imports: []
})
export class a { }