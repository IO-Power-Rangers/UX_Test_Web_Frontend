import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Test } from '../../../interfaces/test';
import {Observable} from 'rxjs';
import {ComponentCanDeactivate} from '../../pending-changes';
import {environment} from '../../../environments/environment';
import {UxModel} from '../../../interfaces/uxModel';
import {TestService} from "../../services/test.service";
import {UserService} from "../../services/user.service";


@Component({
  selector: 'app-create-tests',
  templateUrl: './create-tests.component.html',
  styleUrls: ['./create-tests.component.css']
})
export class CreateTestsComponent implements OnInit, ComponentCanDeactivate {

  constructor(private titleService: Title, private http: HttpClient, private testService: TestService, private userService: UserService) {
    this.titleService.setTitle('Create tests');
    this.isSaved = false;
  }

  urlToEmbed: string;
  isSaved: boolean;
  private readonly URL = environment.local + environment.tests;

  host = 'http://localhost:9090';
  testsEndpoint = '/api/tests';

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
    // TODO add questionnaire to body
    const test: Test = {
      uxModel: {axLink: this.urlToEmbed, tests: []}, questionnaire: undefined, creator: this.userService.getUser(), tasks: this.rawTasks, title: this.testTitle
    };
    this.testService.postTest(test);
    this.isSaved = true;
  }

}
