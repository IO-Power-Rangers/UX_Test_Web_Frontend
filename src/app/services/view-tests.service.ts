import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {BehaviorSubject} from 'rxjs';
import {Test} from '../../interfaces/test';
import {TestGroup} from "../../interfaces/testGroup";


@Injectable({
  providedIn: 'root'
})
export class ViewTestsService {

  constructor(private http: HttpClient) {}

  private readonly testURL =  environment.local + environment.tests;
  private readonly groupURL = environment.local + environment.groups;

  private test: Test;
  private message = new BehaviorSubject<Test>(this.test);
  sharedMessage = this.message.asObservable();

  nextMessage(message: Test) {
    this.message.next(message);
  }

  getTest() {
    return this.http.get(this.testURL, {headers: {'Content-Type': 'application/json'}, responseType: 'json'});
  }

  getGroup() {
    return this.http.get(this.groupURL, {headers: {'Content-Type': 'application/json'}, responseType: 'json'});
  }

  putGroup(group: TestGroup) {
    const url = this.groupURL + '/' + group.id;
    return this.http.put(url, group);
  }

  postGroup(group: TestGroup) {
    return this.http.post(this.groupURL, group);
  }
}
