import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  //Data
  showHiddenText = false;
  animal: string | undefined;
  name: string | undefined;

  //Constructor
  constructor(public dialog: MatDialog) { }

  //Methods
  public openMenu() {
    console.log("open menu");
  }

  openDialog(): void {
    this.dialog.open(LoginComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal },
    });
  }

  ngOnInit(): void {
  }
}

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