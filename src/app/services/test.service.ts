import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  url = environment.local + environment.tests;

  constructor(private http :HttpClient) {}

  getTest(id){
    return this.http.get(this.url + "\\" + id);
  }

  getTests(){
    return this.http.get(this.url);
  }
}
