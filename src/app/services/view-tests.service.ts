import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {BehaviorSubject} from 'rxjs';
import {Test} from '../../interfaces/test';


@Injectable({
  providedIn: 'root'
})
export class ViewTestsService {

  constructor(private http: HttpClient) {}

  private readonly URL =  environment.apiUrl + environment.tests;

  private test: Test;
  private message = new BehaviorSubject<Test>(this.test);
  sharedMessage = this.message.asObservable();

  nextMessage(message: Test) {
    this.message.next(message);
  }

  getTest() {
    return this.http.get(this.URL, {headers: {'Content-Type': 'application/json'}, responseType: 'json'});
  }

}
