import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {BehaviorSubject} from 'rxjs';
import {Test} from '../../interfaces/test';
import {TestGroup} from '../../interfaces/testGroup';


@Injectable({
  providedIn: 'root'
})
export class ViewTestsService {

  constructor(private http: HttpClient) {}

  private readonly testURL =  environment.apiUrl + environment.tests;
  private readonly groupURL = environment.apiUrl + environment.groups;

  private test: Test;
  private message = new BehaviorSubject<Test>(this.test);
  sharedMessage = this.message.asObservable();

  nextMessage(message: Test) {
    this.message.next(message);
  }

  getTest() {
    return this.http.get(this.testURL);
  }

  getGroup() {
    return this.http.get(this.groupURL);
  }

  putGroup(group: TestGroup) {
    const url = this.groupURL + '/' + group.id;
    this.http.put(url, group).toPromise();
  }

  postGroup(group: TestGroup) {
    this.http.post(this.groupURL, group).toPromise();
  }
}
