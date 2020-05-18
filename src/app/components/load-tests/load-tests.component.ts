import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Test } from '../../../interfaces/test';
import {Observable} from 'rxjs';
import {ComponentCanDeactivate} from '../../pending-changes';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-load-tests',
  templateUrl: './load-tests.component.html',
  styleUrls: ['./load-tests.component.css']
})
export class LoadTestsComponent implements OnInit, ComponentCanDeactivate {

  constructor(private titleService: Title, private http: HttpClient) {
    this.titleService.setTitle('Create tests');
    this.isSaved = false;
    this.isLoaded = false;


    // example data
    this.test = {
      title: 'Szkoła językowa',
      axLink: 'https://8bx5e9.axshare.com/#g=1&p=strona_glowna',
      tasks: [
        {
          name: 'Lektorzy',
          description: 'Przejdź do podstrony z lektorami.'
        },
        {
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
          }
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

      alert('You can only import mockups from Axshare.');
      this.testId = '';
    }
  }

  saveResults() {
    this.isSaved = true;
  }

  logValue() {
    console.log(this.rawTasks);
  }

  likertScaleArray(possibleStepsNo) {
    return new Array(possibleStepsNo);
  }
}

