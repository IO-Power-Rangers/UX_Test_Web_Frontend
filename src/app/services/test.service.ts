import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Questionnaire} from "../../interfaces/questionnaire/questionnaire";
import {Test} from "../../interfaces/test";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  urlTest = environment.local + environment.tests;
  urlQuestionnaire = environment.local + environment.questionnaire;

  constructor(private http : HttpClient) {}

  getTest(id){
    return this.http.get(this.urlTest + "\\" + id);
  }

  getTests(){
    return this.http.get(this.urlTest);
  }

  postTest(test : Test) {

    // need to separate test and questionnaire since 
    // there are 2 separate REST endpoints created at backend 
    var questionnaire = test.questionnaire
    test.questionnaire = undefined;

    this.http.post(this.urlTest, test)
      .toPromise()
      .then(data => {
        console.log(data);
      })
      .then(() => this.http.post(this.urlQuestionnaire, questionnaire).toPromise);
  }
}
