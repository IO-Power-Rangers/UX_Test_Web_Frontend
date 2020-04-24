import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'uxTestFrontend';

  readonly URL = 'http://localhost:8099/api/questionnaire';

  public questionnaireName: string = ''

  public questions: any[] = [{
    id: '',
    content: '' 
  }];

  public questionnaires: any

  constructor(private http: HttpClient) { 
    
  }

  ngOnInit() {
    
  }

  addQuestion() {
    this.questions.push({
      id: this.questions.length + 1,
      content: ''
    });
  }

  removeRecentlyAddedQuestion() {
    this.questions.pop(); 
  }

  submitQuestionnaire() {
    
    var body = {
      name: this.questionnaireName,
      questions: this.questions
    }

    this.http.post(this.URL, body)
      .toPromise()
      .then(data => {
        console.log(data)
      })

    
  }

  logValue() {
    console.log(this.questions);
  }

  getAllQuestionnaires() {
    this.questionnaires = this.http.get(this.URL)
  }
}
