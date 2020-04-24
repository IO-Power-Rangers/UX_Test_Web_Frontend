import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Questionnaire } from './questionnaire';
import { Question } from './question';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'uxTestFrontend';
  host = 'http://localhost:8099';
  questionnairesEndpoint = '/api/questionnaire';

  public questionnaireName: string = ''

  public rawQuestions: any[] = [{
    id: '',
    content: '' 
  }];

  public questionnaires: any

  constructor(private http: HttpClient) { 
    
  }

  ngOnInit() {
    
  }

  addQuestion() {
    this.rawQuestions.push({
      id: this.rawQuestions.length + 1,
      content: ''
    });
  }

  removeRecentlyAddedQuestion() {
    this.rawQuestions.pop(); 
  }

  submitQuestionnaire() {

    var body : Questionnaire = {
      name: this.questionnaireName,
      questions: this.rawQuestions.map(question => question.content)
    }

    var url = this.host + this.questionnairesEndpoint

    this.http.post(url, body)
      .toPromise()
      .then(data => {
        console.log(data)
      })
  }

  logValue() {
    console.log(this.rawQuestions);
  }

  getAllQuestionnaires() {
    var url = this.host + this.questionnairesEndpoint
    this.questionnaires = this.http.get(url)
  }
}
