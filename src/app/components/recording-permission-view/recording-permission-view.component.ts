import { Component, OnInit } from '@angular/core';
import { User } from '../../../interfaces/user'
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-recording-permission-view',
  templateUrl: './recording-permission-view.component.html',
  styleUrls: ['./recording-permission-view.component.css']
})

export class RecordingPermissionViewComponent implements OnInit {

  private readonly URL = 'http://localhost:8099/api/users';
  isChecked = false;
  constructor(private http: HttpClient,private userService:UserService) { }

  ngOnInit(): void {
  }

  checkValue(event: any) {
    console.log(event);
  }

  submitDecision() {

    if (this.isChecked) {
      let user = this.userService.user;
      user.recordingAgreement = this.isChecked;
      this.http.put(this.URL + '/' + user.id, user)
        .toPromise()
        .then(data => {
          console.log(data);
        });
    }
  }
}
