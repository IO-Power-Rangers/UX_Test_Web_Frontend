import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Title} from '@angular/platform-browser';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Test } from '../../../interfaces/test';
import {Observable} from 'rxjs';
import {ComponentCanDeactivate} from '../../dialogs/pending-changes';
import {environment} from '../../../environments/environment';
import {RecordingPermittedService} from '../../services/recording-permitted.service';
import {ScreenRecordingComponent} from '../screen-recording/screen-recording.component';
import {UserService} from '../../services/user.service';
import { TestService } from 'src/app/services/test.service';
import { TextAnswer } from 'src/interfaces/questionnaire/answer/text-answer';
import { MultipleChoiceAnswer } from 'src/interfaces/questionnaire/answer/multiple-choice-answer';
import { MultipleAnswerAnswer } from 'src/interfaces/questionnaire/answer/multiple-answer-answer';
import { LikertScaleAnswer } from 'src/interfaces/questionnaire/answer/likert-scale-answer';
import { Questionnaire } from 'src/interfaces/questionnaire/questionnaire';
import { TextQuestion } from 'src/interfaces/questionnaire/question/text-question';
import { LikertScaleQuestion } from 'src/interfaces/questionnaire/question/likert-scale-question';
import { MultipleChoiceQuestion } from 'src/interfaces/questionnaire/question/multiple-choice-question';
import { MultipleAnswerQuestion } from 'src/interfaces/questionnaire/question/multiple-answer-question';
import { TextAnswerService } from 'src/app/services/text-answer.service';
import { MultipleChoiceQuestionOption } from 'src/interfaces/questionnaire/question/multiple-choice-question-option';
import { MultipleAnswerAnswerService } from 'src/app/services/multiple-answer-answer.service';
import { MultipleChoiceAnswerService } from 'src/app/services/multiple-choice-answer.service';
import { LikertScaleAnswerService } from 'src/app/services/likert-scale-answer.service';
import { Router } from '@angular/router';

@Component({
  providers: [ScreenRecordingComponent],
  selector: 'app-load-tests',
  templateUrl: './load-tests.component.html',
  styleUrls: ['./load-tests.component.css']
})
export class LoadTestsComponent implements OnInit, ComponentCanDeactivate {

  constructor(private titleService: Title, private recordingPermittedService: RecordingPermittedService,
              private userService: UserService, private http: HttpClient,
              private screenRecordingComponent: ScreenRecordingComponent,
              private testService: TestService,
              private textAnswerService: TextAnswerService,
              private multipleAnswerAnswerService: MultipleAnswerAnswerService,
              private multipleChoiceAnswerService: MultipleChoiceAnswerService,
              private likertScaleAnswerService: LikertScaleAnswerService,
              private router: Router) {

    this.titleService.setTitle('Create tests');
    this.isSaved = false;
    this.isLoaded = false;
    this.isTasksDone = false;
    this.showRecordingPermissionView = false;


    // example data
    this.test = {
      creator: undefined,
      title: 'Szkoła językowa',
      uxModel: {axLink: 'https://8bx5e9.axshare.com/#g=1&p=strona_glowna', tests:[]},
      tasks: [
        {
          id: 1,
          name: 'Lektorzy',
          description: 'Przejdź do podstrony z lektorami.'
        },
        {
          id: 2,
          name: 'Kontakt',
          description: 'Przejdź do podstrony z kontaktem.'
        }
      ],
      questionnaire: {
        textQuestions: [
          {
            content: 'Co sądzisz o tej makiecie?'
          }
        ],
        multipleAnswerQuestions: [
          {
            content: 'Jakich języków się uczysz?',
            options: [
              {
                content: 'polski'
              },
              {
                content: 'inne'
              }
            ]
          }
        ],
        multipleChoiceQuestions: [
          {
            content: 'Jak czujesz się po tym teście?',
            options: [
              {
                content: 'dobrze'
              },
              {
                content: 'źle'
              }
            ]
          },
          {
            content: 'Hej?',
            options: [
              {
                content: 'halo'
              },
              {
                content: 'siemka'
              }
            ]
          },
        ],
        likertScaleQuestions: [
          {
            content: 'Oceń swoje doświadczenie (5 - najlepsza ocena).',
            possibleStepsNo: 5
          }
        ]
      }
    };
  }

  testId: string;
  isSaved: boolean;
  isLoaded: boolean;
  isTasksDone: boolean;
  showRecordingPermissionView: boolean;
  private readonly URL = environment.local + environment.tests;
  test: Test;

  host = 'http://localhost:9090';
  testsEndpoint = '/api/tests';

  public testTitle = '';

  public rawTasks: any[] = [];
  public rawQuestionsT: any[] = [];
  public rawQuestionsMC: any[] = [];
  public rawQuestionsMA: any[] = [];
  public rawQuestionsLS: any[] = [];

  ngOnInit(): void {
  }

  @HostListener('window:beforeunload')
  canDeactivate(): Observable<boolean> | boolean {

    return this.isSaved;

  }

  loadTest() {
    this.showRecordingPermissionView = true;

    this.testService.getTest(this.testId).subscribe((data) => {
      this.test = <Test>data;

      this.recordingPermittedService.permitted$.subscribe(() => {
        this.showRecordingPermissionView = false;
        this.embedWebsite();
        this.isLoaded = true;
        // example test
        this.screenRecordingComponent.startRecording(this.userService.getUser(), this.test);
      });

    });
  }


  embedWebsite() {

    if (this.testId) {

      // hack job, forever

      const newIframe = document.createElement('iframe');
      newIframe.id = 'websiteIframe';
      newIframe.src = this.test.uxModel.axLink;
      newIframe.style.cssText = '  border: none;\n' +
        '  padding: 0;\n' +
        '  -webkit-transform:scale(1);\n' +
        '  -webkit-transform-origin: top left;\n' +
        '  margin: 0 0 0 -24.8%;\n' +
        '  background-color: #EEEEEE;\n' +
        '  width: 124.8%;\n' +
        '  height: 100%;';

      document.getElementById('websiteIframe').replaceWith(newIframe);

      this.testTitle = this.test.title;

      this.test.tasks.forEach(task => this.rawTasks.push(task));

      this.test.questionnaire.textQuestions.forEach(q => this.rawQuestionsT.push({
        question: q,
        answer: this.prepareTextAnswer(q)
      }));

      this.test.questionnaire.multipleChoiceQuestions.forEach(q => this.rawQuestionsMC.push({
        question: q,
        answer: this.prepareMultipleChoiceAnswer(q)
      }));

      this.test.questionnaire.multipleAnswerQuestions.forEach(q => this.rawQuestionsMA.push({
        question: q,
        answer: this.prepareMultipleAnswerAnswer(q),
        selection: this.prepareSelectedOptionsArray(q)
      }));

      this.test.questionnaire.likertScaleQuestions.forEach(q => this.rawQuestionsLS.push({
        question: q,
        answer: this.prepareLikertScaleAnswer(q)
      }));

      this.isLoaded = true;

    } else {

      alert('There\' no test with this id.');
      this.testId = '';
    }
  }

  checkTasksAndProceed() {
    // TODO MAYBE check if all checkboxes are selected
    this.screenRecordingComponent.finishRecording();
    this.isTasksDone = true;
  }


  saveResults() {
    // should save to the database here
    // TODO MAYBE check if all questions are answered
    this.isSaved = true;

    this.rawQuestionsMA.forEach(q => this.mapSelectionToMultipleAnswerAnswer(q))

    this.rawQuestionsT.forEach(raw => this.textAnswerService.postTextAnswer(raw.answer))
    this.rawQuestionsMC.forEach(raw => this.multipleChoiceAnswerService.postMultipleChoiceAnswer(raw.answer))
    this.rawQuestionsMA.forEach(raw => this.multipleAnswerAnswerService.postMultipleAnswerAnswer(raw.answer))
    this.rawQuestionsLS.forEach(raw => this.likertScaleAnswerService.postLikertScaleAnswer(raw.answer))

    this.router.navigate(['/home'])
  }

  logValue() {
    console.log(this.rawTasks);
  }

  likertScaleArray(possibleStepsNo) {
    return new Array(possibleStepsNo);
  }

  prepareTextAnswer(question: TextQuestion): TextAnswer {
    return {
      userId: this.userService.getUser().id,
      questionId: question.id,
      answer: null
    }
  }

  prepareLikertScaleAnswer(question: LikertScaleQuestion): LikertScaleAnswer {
    return {
      userId: this.userService.getUser().id,
      questionId: question.id,
      answer: null
    }
  }

  prepareMultipleChoiceAnswer(question: MultipleChoiceQuestion): MultipleChoiceAnswer {
    return {
      userId: this.userService.getUser().id,
      questionId: question.id,
      selectedOptionId: null
    }
  }

  prepareMultipleAnswerAnswer(question: MultipleAnswerQuestion): MultipleAnswerAnswer {
    return {
      userId: this.userService.getUser().id,
      questionId: question.id,
      selectedOptionsIds: []
    }
  }

  prepareSelectedOptionsArray(question) {
    var array = []
    question.options.forEach(o => array.push(false))
    return array
  }

  prepareLikertArray(question: LikertScaleQuestion) {
    var array = []
    for (var i = 0; i < question.possibleStepsNo; i++) {
      array.push(false)
    }
    return array
  }

  mapSelectionToMultipleAnswerAnswer(raw) {

    for (var i = 0; i < raw.selection.length; i++) {
      if (raw.selection[i]) {
        raw.answer.selectedOptionsIds.push(raw.question.options[i].id)
      }
    }
  }

}

