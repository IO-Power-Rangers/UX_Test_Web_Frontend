import {Component, ElementRef, HostListener, OnInit, ViewChild, Input} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Test } from '../../../interfaces/test';
import {Observable, BehaviorSubject} from 'rxjs';
import {environment} from '../../../environments/environment';
import {UxModel} from '../../../interfaces/uxModel';
import {TestService} from "../../services/test.service";
import {UserService} from "../../services/user.service";
import { TextQuestion } from 'src/interfaces/questionnaire/question/text-question';
import { LikertScaleQuestion } from 'src/interfaces/questionnaire/question/likert-scale-question';
import { MultipleChoiceQuestionOption } from 'src/interfaces/questionnaire/question/multiple-choice-question-option';
import { MultipleChoiceQuestion } from 'src/interfaces/questionnaire/question/multiple-choice-question';
import { MultipleAnswerQuestionOption } from 'src/interfaces/questionnaire/question/multiple-answer-question-option';
import { MultipleAnswerQuestion } from 'src/interfaces/questionnaire/question/multiple-answer-question';
import { Questionnaire } from 'src/interfaces/questionnaire/questionnaire';
import { Router } from '@angular/router';
import { ComponentCanDeactivate } from 'src/app/dialogs/pending-changes';


@Component({
  selector: 'app-create-tests',
  templateUrl: './create-tests.component.html',
  styleUrls: ['./create-tests.component.css']
})
export class CreateTestsComponent implements OnInit, ComponentCanDeactivate {

  constructor(
    private titleService: Title,
    private http: HttpClient,
    private testService: TestService,
    private userService: UserService,
    private router: Router) {

    this.titleService.setTitle('Create tests');
    this.isSaved = false;
  }

  urlToEmbed: string;
  isSaved: boolean;
  private readonly URL = environment.apiUrl + environment.tests;
  @ViewChild("filedialog") input : HTMLInputElement;

  testsEndpoint = '/api/tests';
  imageSource = BehaviorSubject.create(null)

  public testTitle = '';

  public rawTasks: any[] = [{
    index: 0,
    name: '',
    description: ''
  }];

  ngOnInit(): void {
  }

  @HostListener('window:beforeunload')
  canDeactivate(): Observable<boolean> | boolean {

    return this.isSaved;

  }


  embedWebsite() {

    if (this.urlToEmbed.includes('.axshare.com')) {

      // hack job, forever

      const newIframe = document.createElement('iframe');
      newIframe.id = 'websiteIframe';
      newIframe.src = this.urlToEmbed;
      newIframe.style.cssText = '  border: none;\n' +
        '  padding: 0;\n' +
        '  -webkit-transform:scale(1);\n' +
        '  -webkit-transform-origin: top left;\n' +
        '  margin: 0 0 0 -4%;\n' +
        '  background-color: #EEEEEE;\n' +
        '  width: 104%;\n' +
        '  height: 100%;';

      document.getElementById('websiteIframe').replaceWith(newIframe);

    } else {

      alert('You can only import mockups from Axshare.');
      this.urlToEmbed = '';
    }
  }

  addTask() {
    this.rawTasks.push({
      index: this.rawTasks.length,
      name: '',
      description: ''
    });

  }

  removeTask(i) {
    this.rawTasks.splice(i, 1);
  }

  submitTest() {

    if (confirm('Please confirm that you want to save this test. You won\'t be able to make any changes to it later.')) {

      const questionnaire: Questionnaire = {
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

      const test: Test = {
        uxModel: {axLink: this.urlToEmbed, tests: []},
        questionnaire: questionnaire,
        creator: this.userService.getUser(),
        tasks: this.rawTasks,
        title: this.testTitle
      };

      this.testService.postTest(test)
      this.isSaved = true;
      this.router.navigate(['/home'])
    }
  }

  public questionnaireName = '';

  public rawQuestions: any[] = [];

  public questionnaires: any;

  attachFile(question) {
    let input = document.createElement('input')
    let imagePath = null
    input.type = "file"
    input.accept = "image/*"
    input.multiple = false
    let imageSource = this.imageSource
    input.onchange = function(event) {
      let image = input.files[0];
      let reader = new FileReader();
      let base64 = null;

      reader.addEventListener("load", function() {base64 = reader.result; question.question.image = reader.result; question.imageName = image.name})
      reader.readAsDataURL(image)

    }
    input.click();
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


}
