import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-tests',
  templateUrl: './view-tests.component.html',
  styleUrls: ['./view-tests.component.css']
})
export class ViewTestsComponent implements OnInit {
  userS: UserService;

  constructor(private titleService: Title) {
    this.titleService.setTitle('View your tests');
    // console.log("UAAAA: ", this.userS.getUser$.email);
  }

  ngOnInit(): void {
  }

}
