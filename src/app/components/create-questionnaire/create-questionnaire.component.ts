import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Questionnaire } from '../../../interfaces/questionnaire/questionnaire';
import { TextQuestion } from '../../../interfaces/questionnaire/question/text-question';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MultipleChoiceQuestion } from '../../../interfaces/questionnaire/question/multiple-choice-question';
import { MultipleChoiceQuestionOption } from '../../../interfaces/questionnaire/question/multiple-choice-question-option';
import { LikertScaleAnswer } from 'src/interfaces/questionnaire/answer/likert-scale-answer';
import { LikertScaleQuestion } from 'src/interfaces/questionnaire/question/likert-scale-question';
import { MultipleAnswerQuestionOption } from 'src/interfaces/questionnaire/question/multiple-answer-question-option';
import { MultipleAnswerQuestion } from 'src/interfaces/questionnaire/question/multiple-answer-question';

@Component({
  selector: 'app-create-questionnaire',
  templateUrl: './create-questionnaire.component.html',
  styleUrls: ['./create-questionnaire.component.css']
})

export class CreateQuestionnaireComponent implements OnInit {

  title = 'uxTestFrontend';

  host = 'http://localhost:8099';
  questionnairesEndpoint = '/api/questionnaire';

  public questionnaireName = '';

  public rawQuestions: any[] = [];

  public questionnaires: any;

  constructor(private http: HttpClient, private router: Router) {

  }

  ngOnInit() {

  }

  addTextQuestion() {

    const question: TextQuestion = {
      content: null
    };

    const rawQuestion = {
      type: 'text',
      question
    };

    this.rawQuestions.push(rawQuestion);
  }

  addLikertScaleQuestion() {

    const question: LikertScaleQuestion = {
      content: null,
      possibleStepsNo: null
    };

    const rawQuestion = {
      type: 'likert',
      question
    };

    this.rawQuestions.push(rawQuestion);
  }

  addMultipleChoiceQuestion() {

    const options: MultipleChoiceQuestionOption[] = [];

    const question: MultipleChoiceQuestion = {
      content: null,
      options
    };

    const rawQuestion = {
      type: 'multipleChoice',
      question
    };

    this.rawQuestions.push(rawQuestion);
  }

  addOptionToMultipleChoiceQuestion(index: number) {

    const newOption: MultipleChoiceQuestionOption = {
      content: null
    };

    this.rawQuestions[index].question.options.push(newOption);
  }

  removeOptionFromMultipleChoiceQuestion(index: number) {

    this.rawQuestions[index].question.options.pop();
  }

  addMultipleAnswerQuestion() {

    const options: MultipleAnswerQuestionOption[] = [];

    const question: MultipleAnswerQuestion = {
      content: null,
      options
    };

    const rawQuestion = {
      type: 'multipleAnswer',
      question
    };

    this.rawQuestions.push(rawQuestion);
  }

  addOptionToMultipleAnswerQuestion(index: number) {

    const newOption: MultipleAnswerQuestionOption = {
      content: null
    };

    this.rawQuestions[index].question.options.push(newOption);
  }

  removeOptionFromMultipleAnswerQuestion(index: number) {

    this.rawQuestions[index].question.options.pop();
  }

  removeQuestion(i) {
    this.rawQuestions.splice(i, 1);
  }

  submitQuestionnaire() {

    const questionnaire: Questionnaire = {
      name: this.questionnaireName,
      textQuestions: this.rawQuestions
        .filter(raw => raw.type === 'text')
        .map(raw => raw.question),
      multipleChoiceQuestions: this.rawQuestions
        .filter(raw => raw.type === 'multipleChoice')
        .map(raw => raw.question),
      multipleAnswerQuestions: this.rawQuestions
        .filter(raw => raw.type === 'multipleAnswer')
        .map(raw => raw.question),
      likertScaleQuestions: this.rawQuestions
      .filter(raw => raw.type === 'likert')
      .map(raw => raw.question)
    };

    const url = this.host + this.questionnairesEndpoint;

    this.http.post(url, questionnaire)
      .toPromise()
      .then(data => {
        console.log(data);
      })
      .finally(() => this.router.navigate(['/createTests']));
  }

  getAllQuestionnaires() {
    const url = this.host + this.questionnairesEndpoint;
    this.questionnaires = this.http.get(url);
  }
}
