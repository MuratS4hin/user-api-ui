import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../login/login.component.scss']
})
export class LoginComponent implements OnInit {
  //Data
  loading = false;
  submitted = false;
  returnUrl: string | undefined;
  Email: any;
  Password: any;
  Error = false;

  //Constructor
  constructor(
    private router: Router,
    private userService: UserService,
  ) {}

  //Methods
  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    this.userService.login(this.Email, this.Password).subscribe(
      result => {
        this.loading = false;
        if (result.id) this.router.navigate(['/home']);
      },
      error => {
        this.loading = false;
        this.Error=true;
      }
    )

  }
}
