import { NgModule, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../../home/home.component';

//Module
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from '../register/register.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';


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
  loading = false;

  //Constructor
  constructor() { }
  // constructor(public dialog: MatDialog) { }

  //Methods
  public openMenu() {
    console.log("open menu");
  }

  ngOnInit(): void { }
}

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    MatRadioModule,
    MatTableModule,
    MatCardModule
  ]
})
export class a { }