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

  constructor(private http: HttpClient) { 
    
  }

  getQuestionnaires()  {
    
      // this.questionnaires = this.http.get(this.URL);

      // questions: [
      //   {content: "pytanie 1"},
      //   {content: "pytanie 2"},
      //   {content: "pytanie 3"},
      //   {content: "pytanie 4"},
      //   {content: "pytanie 5"},
      //   {content: "pytanie 6"}
      //   ]

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
}
