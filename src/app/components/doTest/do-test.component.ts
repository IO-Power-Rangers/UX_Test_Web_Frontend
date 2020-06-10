import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ViewTestsService} from '../../services/view-tests.service';
import {ScreenRecordingComponent} from '../screen-recording/screen-recording.component';
import {Test} from '../../../interfaces/test';

@Component({
  selector: 'app-do-test',
  templateUrl: './do-test.component.html',
  providers: [ScreenRecordingComponent],
  styleUrls: ['./do-test.component.css']
})

export class DoTestComponent implements OnInit {

  test: Test;
  isLoaded: boolean;
  isTasksDone: boolean;
  public rawTasks: any[] = [];

  constructor(private titleService: Title, private viewTestsService: ViewTestsService) {
    this.titleService.setTitle('Do the test');
    this.isLoaded = false;
    this.isTasksDone = false;
  }

  ngOnInit(): void {
    this.viewTestsService.sharedMessage.subscribe(message => this.test = message, null, () => '');
    this.test.tasks.forEach(task => this.rawTasks.push(task));
    this.embedWebsite();
    this.isLoaded = true;
  }


  embedWebsite() {
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
    this.isLoaded = true;
  }

  checkTasksAndProceed() {
    this.isTasksDone = true;
  }
}
