import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { trigger, transition, useAnimation } from '@angular/animations';
import { shake } from 'ngx-animate'; // npm i ngx-animate

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../login/login.component.scss'],
  animations: [
    trigger('shake', [transition('* => *', useAnimation(shake))])
],
})
export class LoginComponent implements OnInit {
  //Data
  loading = false;
  submitted = false;
  returnUrl: string | undefined;
  Email: any;
  Password: any;
  Error = false;
  showAnimation: boolean = true;

  //Constructor
  constructor(
    private router: Router,
    private userService: UserService,
  ) { }

  //Methods
  ngOnInit(): void { }

  onSubmit() {
    this.showAnimation = true;
    this.submitted = true;
    this.loading = true;
    this.userService.login(this.Email, this.Password).subscribe(
      result => {
        console.log(result);
        this.loading = false;
        if (result) {
          this.router.navigate(['/home']);
        }
      },
      error => {
        this.showAnimation = false;
        this.loading = false;
        this.Error = true;
      }
    )
  }
}
