import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Test} from '../../interfaces/test';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ViewTestsService {

  constructor(private http: HttpClient) {}

  private readonly URL =  environment.local + environment.tests;

  getTest() {
    return this.http.get(this.URL, {headers: {'Content-Type': 'application/json'}, responseType: 'json'});
  }

}
