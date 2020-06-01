import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../../services/user.service';
import {User} from '../../../interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User;

  constructor(private userService: UserService, private router: Router) {
    this.userService.postUser$.subscribe(userData => { this.user = userData; });
  }

  ngOnInit(): void {
  }

}
