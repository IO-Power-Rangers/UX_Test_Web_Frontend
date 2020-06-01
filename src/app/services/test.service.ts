import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Questionnaire} from "../../interfaces/questionnaire/questionnaire";
import {Test} from "../../interfaces/test";

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

  postTest(test:Test){
    this.http.post(this.url, test)
      .toPromise()
      .then(data => {
        console.log(data);
      });
  }
}
