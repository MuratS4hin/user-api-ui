import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  //Data
  loading = false;
  submitted = false;
  Name: any;
  Password: any;
  Email: any;
  Birthday: any;
  UsersRole: any;
  Error = false;

  //Constructor
  constructor(
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

  //Methods

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    this.userService.register(this.Name, this.Password, this.Email, this.Birthday, this.UsersRole).subscribe(
      result => {
        this.loading = false;
        if (result.id) {
          this.router.navigate(['/login']);
        }
      },
      error => {
        this.loading = false;
        this.Error = true;
      }
    )

  }
}
