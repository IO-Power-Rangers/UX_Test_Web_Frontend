import {Component, OnInit} from '@angular/core';
import {AuthService, GoogleLoginProvider, SocialUser} from 'angularx-social-login';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-out',
  templateUrl: './sign-in-out.component.html',
  styleUrls: ['./sign-in-out.component.css']
})
export class SignInOutComponent implements OnInit {

 
  private loggedIn: boolean;
  private  buttonText : string;
  public userLogged:User;
  constructor(private authService: AuthService,private userService:UserService,private router:Router) { }

  signInOut(): void {

    if (!this.loggedIn) {

     let user = this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
      user.then(userSocial => {
        let userData = this.parseUser(userSocial);
        this.userLogged = userData;
        this.userService.postUser(userData);
      })      

    } else {
      this.authService.signOut();
      this.router.navigate(['/']);
      this.userService.postUser(null);
    }

  }

  parseUser(userSocial) : User{
    let userData : User = { email : userSocial.email, firstName: userSocial.firstName, lastName: userSocial.lastName, role:null
    };
    return userData;
  }

  ngOnInit() {

    this.buttonText = 'Sign in';

    this.authService.authState.subscribe((user) => {

      this.loggedIn = (user != null);

      if (this.loggedIn) {
        this.userService.postUser(this.parseUser(user));
        this.buttonText = 'Sign out';

      } else {
        this.userService.postUser(null);
        this.buttonText = 'Sign in';

      }

    });

  }

  get loggedInG(): boolean {

    return this.loggedIn;

  }



  get buttonTextG(): string {

    return this.buttonText;

  }

}
