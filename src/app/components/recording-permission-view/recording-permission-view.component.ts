import { Component, OnInit } from '@angular/core';
import { User } from '../../../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
import {RecordingPermittedService} from '../../services/recording-permitted.service';


@Component({
  selector: 'app-recording-permission-view',
  templateUrl: './recording-permission-view.component.html',
  styleUrls: ['./recording-permission-view.component.css']
})

export class RecordingPermissionViewComponent implements OnInit {

  private readonly URL = environment.local + environment.users;
  isChecked = false;
  constructor(private http: HttpClient, private userService: UserService,
              private recordingPermittedService: RecordingPermittedService) { }

  ngOnInit(): void {
  }

  submitDecision() {

    if (this.isChecked) {
      let user = this.userService.user;
      user.recordingAgreement = this.isChecked;
      this.http.put(this.URL + '/' + user.id, user);
    }

    this.recordingPermittedService.permitted();

  }
}
