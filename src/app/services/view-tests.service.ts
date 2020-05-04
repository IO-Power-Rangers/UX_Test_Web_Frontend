import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Test} from '../../interfaces/test';

@Injectable({
  providedIn: 'root'
})
export class ViewTestsService {

  http: HttpClient;
  test: Test;
  host = 'http://localhost:9090';
  testsEndpoint = '/api/tests';

  getTest() {
    return this.http.get(this.host + this.testsEndpoint);
  }

}
