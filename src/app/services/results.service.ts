import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, from } from 'rxjs';
import { Result, QuestionType } from '../../interfaces/questionnaire/result/result';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  url = environment.apiUrl + environment.results;

  constructor(private client: HttpClient) { }

  getResultsByQuestionnaireId(id: Number): Observable<Array<Result>> {
    //return this.client.get<Array<Result>>(this.url + "/" + id)
    return from([[
      {
        type: QuestionType.LIKERT_SCALE,
        question: "Mocked question title",
        answers: new Map<Number,number>([
          [1, 100],
          [2, 120],
          [3, 140],
          [4, 150],
          [5, 160],
          [6, 170],
          [7, 180]
        ])
      },
      {
        type: QuestionType.TEXT,
        question: "Are you serious?",
        answers: ["No", "Of course no", "Yes"]
      },
      {
        type: QuestionType.MULTIPLE_CHOICE,
        question: "Is 42 the Answer to the Ultimate Question of Life, the Universe, and Everything? Very very very long title",
        answers: new Map<String, number>(
          [
            ["No", 20],
            ["Yes", 10],
            ["I don't know", 30],
            ["As Jesus said", 15],
            ["Very very very very very very very very very very very very very very very long answer", 40]
          ]
        )
      },
      {
        type: QuestionType.MULTIPLE_ANSWER,
        question: "Please select places where you use your smartphone.",
        answers: new Map<String, number>(
          [
            ["Restroom", 20],
            ["Bedroom", 20],
            ["Office", 20],
            ["Kitchn", 20]
          ]
        )
      }
    ]])
  }

}
