import { Component, OnInit } from '@angular/core';
import { User } from '../../../interfaces/user'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-recording-permission-view',
  templateUrl: './recording-permission-view.component.html',
  styleUrls: ['./recording-permission-view.component.css']
})

export class RecordingPermissionViewComponent implements OnInit {

  private readonly mockUser: User = { id: 1, email: 'test@gmail.com', firstName: 'Test', lastName: 'Testowy', role: 'UXER' };
  private readonly URL = 'http://localhost:8099/api/users';
  isChecked = false;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  checkValue(event: any) {
    console.log(event);
  }

  submitDecision() {

    if (this.isChecked) {
      const user: User = { email: this.mockUser.email, firstName: this.mockUser.firstName,
        lastName: this.mockUser.lastName, role: this.mockUser.role, recordingAgreement: this.isChecked };
      console.log(user);
      this.http.put(this.URL + '/' + this.mockUser.id, user)
        .toPromise()
        .then(data => {
          console.log(data);
        });
    }
  }
}
