import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MultipleChoiceAnswer } from 'src/interfaces/questionnaire/answer/multiple-choice-answer';

@Injectable({
  providedIn: 'root'
})
export class MultipleChoiceAnswerService {

  constructor(private http: HttpClient) { }

  url = environment.apiUrl + environment.multipleChoiceAnswer;

  postMultipleChoiceAnswer(answer: MultipleChoiceAnswer) {
    this.http.post(this.url, answer)
      .toPromise()
  }
}
