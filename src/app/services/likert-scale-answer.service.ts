import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LikertScaleAnswer } from 'src/interfaces/questionnaire/answer/likert-scale-answer';

@Injectable({
  providedIn: 'root'
})
export class LikertScaleAnswerService {

  constructor(private http: HttpClient) { }

  url = environment.apiUrl + environment.likertScaleAnswer;

  postLikertScaleAnswer(answer: LikertScaleAnswer) {
    this.http.post(this.url, answer)
      .toPromise()
  }
}
