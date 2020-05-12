import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {BehaviorSubject} from 'rxjs';
import {Task} from '../../interfaces/task';


@Injectable({
  providedIn: 'root'
})
export class ViewTestsService {

  constructor(private http: HttpClient) {}

  private readonly URL =  environment.local + environment.tests;

  private message = new BehaviorSubject([]);
  sharedMessage = this.message.asObservable();

  nextMessage(message: Task[]) {
    this.message.next(message);
  }

  getTest() {
    return this.http.get(this.URL, {headers: {'Content-Type': 'application/json'}, responseType: 'json'});
  }

}
