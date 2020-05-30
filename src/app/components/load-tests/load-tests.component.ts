import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Test } from '../../../interfaces/test';
import {Observable} from 'rxjs';
import {ComponentCanDeactivate} from '../../pending-changes';
import {environment} from '../../../environments/environment';
import {RecordingPermittedService} from '../../services/recording-permitted.service';
import {ScreenRecordingComponent} from '../screen-recording/screen-recording.component';
import {UserService} from '../../services/user.service';

@Component({
  providers: [ScreenRecordingComponent],
  selector: 'app-load-tests',
  templateUrl: './load-tests.component.html',
  styleUrls: ['./load-tests.component.css']
})
export class LoadTestsComponent implements OnInit, ComponentCanDeactivate {

  constructor(private titleService: Title, private recordingPermittedService: RecordingPermittedService,
              private userService: UserService, private http: HttpClient,
              private screenRecordingComponent: ScreenRecordingComponent) {

    this.titleService.setTitle('Create tests');
    this.isSaved = false;
    this.isLoaded = false;
    this.isTasksDone = false;
    this.showRecordingPermissionView = false;


    // example data
    this.test = {
      title: 'Szkoła językowa',
      axLink: 'https://8bx5e9.axshare.com/#g=1&p=strona_glowna',
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

    this.recordingPermittedService.permitted$.subscribe(() => {
        this.showRecordingPermissionView = false;
        this.embedWebsite();
        this.isLoaded = true;
        // example test
        this.screenRecordingComponent.startRecording(this.userService.getUser(), this.test);
      }
    );
  }


  embedWebsite() {

    if (this.testId) {

      // hack job, forever

      const newIframe = document.createElement('iframe');
      newIframe.id = 'websiteIframe';
      newIframe.src = this.test.axLink;
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
      this.test.questionnaire.textQuestions.forEach(q => this.rawQuestionsT.push(q));
      this.test.questionnaire.multipleChoiceQuestions.forEach(q => this.rawQuestionsMC.push(q));
      this.test.questionnaire.multipleAnswerQuestions.forEach(q => this.rawQuestionsMA.push(q));
      this.test.questionnaire.likertScaleQuestions.forEach(q => this.rawQuestionsLS.push(q));
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
  }

  logValue() {
    console.log(this.rawTasks);
  }

  likertScaleArray(possibleStepsNo) {
    return new Array(possibleStepsNo);
  }

}

