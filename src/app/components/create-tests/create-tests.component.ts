import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Test } from '../../../interfaces/test';
import {Observable} from 'rxjs';
import {ComponentCanDeactivate} from '../../pending-changes';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-create-tests',
  templateUrl: './create-tests.component.html',
  styleUrls: ['./create-tests.component.css']
})
export class CreateTestsComponent implements OnInit, ComponentCanDeactivate {

  constructor(private titleService: Title, private http: HttpClient) {
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

    // const test: Test = {
    //   title: this.testTitle,
    //   axLink: this.urlToEmbed,
    //   tasks: this.rawTasks,
    // };

    // this.http.post(this.host + this.testsEndpoint, JSON.stringify(test), {headers: {'Content-Type': 'application/json'}})
    //   .toPromise()
    //   .then(data => {
    //     console.log(data);
    // });

    this.isSaved = true;
  }

  logValue() {
    console.log(this.rawTasks);
  }
}
