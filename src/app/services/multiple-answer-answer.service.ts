import { Injectable } from '@angular/core';
import { MultipleAnswerAnswer } from 'src/interfaces/questionnaire/answer/multiple-answer-answer';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MultipleAnswerAnswerService {

  constructor(private http: HttpClient) { }

  url = environment.apiUrl + environment.multipleAnswerAnswer;

  postMultipleAnswerAnswer(answer: MultipleAnswerAnswer) {
    this.http.post(this.url, answer)
      .toPromise()
  }
}
