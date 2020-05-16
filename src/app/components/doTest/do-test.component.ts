import {Component, OnInit, ViewChild} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Task} from '../../../interfaces/task';
import {ViewTestsService} from '../../services/view-tests.service';
import {ScreenRecordingComponent} from '../screen-recording/screen-recording.component';

@Component({
  selector: 'app-do-test',
  templateUrl: './do-test.component.html',
  providers: [ScreenRecordingComponent],
  styleUrls: ['./do-test.component.css']
})

export class DoTestComponent implements OnInit {

  message: Task[];
  modelMessage: string;
  currTask: Task;
  nextButton: HTMLButtonElement;

  constructor(private titleService: Title, private viewTestsService: ViewTestsService,
              private screenRecordingComponent: ScreenRecordingComponent) {
    this.titleService.setTitle('Do the test');
  }

  ngOnInit(): void {
    this.viewTestsService.sharedMessage.subscribe(message => this.message = message);
    this.viewTestsService.sharedModelMessage.subscribe(modelMessage => this.modelMessage = modelMessage);
    this.currTask = this.message[0];
    this.nextButton = document.getElementById('nextTaskButton') as HTMLButtonElement;
  }

  nextTask() {
    const index = this.message.indexOf(this.currTask);
    this.currTask = this.message[index + 1];

    if (!this.currTask) {
      this.nextButton.disabled = true;
    }
  }

  embedWebsite() {
    const newIframe = document.createElement('iframe');
    newIframe.id = 'websiteIframe';
    newIframe.src = this.modelMessage;
    newIframe.style.cssText = '  border: none;\n' +
      '  padding: 0;\n' +
      '  -webkit-transform:scale(0.9);\n' +
      '  -webkit-transform-origin: top left;\n' +
      '  margin: 0 0 0 -4%;\n' +
      '  background-color: #EEEEEE;\n' +
      '  width: 115.5%;\n' +
      '  height: 111.2%;';

    document.getElementById('websiteIframe').replaceWith(newIframe);
  }

  finishRecording() {
    this.screenRecordingComponent.finishRecording();
  }
}
