import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TextAnswer } from 'src/interfaces/questionnaire/answer/text-answer';

@Injectable({
  providedIn: 'root'
})
export class TextAnswerService {

  constructor(private http: HttpClient) { }

  url = environment.apiUrl + environment.textAnswer;

  postTextAnswer(answer: TextAnswer) {
    this.http.post(this.url, answer)
      .toPromise()
  }
}
