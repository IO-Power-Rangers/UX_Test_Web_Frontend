import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  roleControl = new FormControl('', Validators.required);
  public disabled: boolean
  public roleSelected;
  user: User;
  private readonly URL = 'http://localhost:8099/api/users';


  public roles = [
    'UXER',
    'TESTER'
  ];

  constructor(private userService: UserService, private http: HttpClient,private router: Router) {
    this.disabled == true;
    this.userService.postUser$.subscribe(userData => { this.user = userData; })
  }

  ngOnInit(): void {

  }


  login(): void {
    this.user.role = this.roleSelected;
    this.http.get(this.URL + '/' + this.user.email + '/' + this.user.role)
      .toPromise()
      .then((id:number) => {
        this.user.id = id;
        this.userService.user = this.user;
      }).catch(err => {
        this.http.post(this.URL, this.user)
        .toPromise()
        .then((id:number) => {
          this.user.id = id;
          this.userService.user = this.user;})
      }).finally( ()=> {
        if (this.user.role == 'UXER'){
          this.router.navigate(['/home']);
        }
        if (this.user.role == 'TESTER'){
          this.router.navigate(['/home'])
        }
      });
  }

}
