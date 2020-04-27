import {Component, OnInit} from '@angular/core';
import {AuthService, GoogleLoginProvider, SocialUser} from 'angularx-social-login';

@Component({
  selector: 'app-sign-in-out',
  templateUrl: './sign-in-out.component.html',
  styleUrls: ['./sign-in-out.component.css']
})
export class SignInOutComponent implements OnInit {

  private user: SocialUser;
  private loggedIn: boolean;
  private buttonText: string;

  constructor(private authService: AuthService) { }

  signInOut(): void {

    if (!this.loggedIn) {

      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);

    } else {

      this.authService.signOut();

    }

  }

  ngOnInit() {

    this.buttonText = 'Sign in';

    this.authService.authState.subscribe((user) => {

      this.user = user;
      this.loggedIn = (user != null);

      if (this.loggedIn) {

        this.buttonText = 'Sign out';

      } else {

        this.buttonText = 'Sign in';

      }

    });

  }

  get loggedInG(): boolean {

    return this.loggedIn;

  }

  get userG(): SocialUser {

    return this.user;

  }

  get buttonTextG(): string {

    return this.buttonText;

  }

}
