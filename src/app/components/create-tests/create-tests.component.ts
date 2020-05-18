import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Test} from "../../../interfaces/test";
import {UxModel} from "../../../interfaces/uxModel";

@Component({
  selector: 'app-create-tests',
  templateUrl: './create-tests.component.html',
  styleUrls: ['./create-tests.component.css']
})
export class CreateTestsComponent implements OnInit {

  urlToEmbed: string;

  constructor(private titleService: Title, private http: HttpClient) {
    this.titleService.setTitle('Create tests');
  }

  ngOnInit(): void {
  }


  embedWebsite() {

    if (this.urlToEmbed.includes('.axshare.com')) {

      // hack job, for now

      const newIframe = document.createElement('iframe');
      newIframe.id = 'websiteIframe';
      newIframe.src = this.urlToEmbed;
      newIframe.style.cssText = '  border: none;\n' +
        '  padding: 0;\n' +
        '  -webkit-transform:scale(0.9);\n' +
        '  -webkit-transform-origin: top left;\n' +
        '  margin: 0 0 0 -4%;\n' +
        '  background-color: #EEEEEE;\n' +
        '  width: 115.5%;\n' +
        '  height: 111.2%;';

      document.getElementById('websiteIframe').replaceWith(newIframe);

    } else {

      alert('You can only import mockups from Axshare.');
      this.urlToEmbed = '';
    }
  }

  host = 'http://localhost:9090';
  testsEndpoint = '/api/tests';

  public testTitle = '';

  public rawTasks: any[] = [{
    index: 0,
    name: '',
    description:''
  }];

  addTask() {
    this.rawTasks.push({
      index: this.rawTasks.length,
      name: '',
      description: ''
    });
  }

  removeRecentlyAddedTask() {
    this.rawTasks.pop();
  }

  submitTest() {

    const body: Test = {
      uxModel: { axLink: this.urlToEmbed, tests: []},
      title: this.testTitle,
      tasks: this.rawTasks
    };

    this.http.post(this.host + this.testsEndpoint, JSON.stringify(body), {headers: {'Content-Type': 'application/json'}})
      .toPromise()
      .then(data => {
        console.log(data);
      });
  }

  logValue() {
    console.log(this.rawTasks);
  }
}
