import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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

export class DoTestComponent implements OnInit, AfterViewInit {

  message: Task[];
  modelMessage: string;
  currTask: Task;
  @ViewChild('nextBtn') nextButton: ElementRef;

  constructor(private titleService: Title, private viewTestsService: ViewTestsService,
              private screenRecordingComponent: ScreenRecordingComponent) {
    this.titleService.setTitle('Do the test');
  }

  ngOnInit(): void {
    this.viewTestsService.sharedMessage.subscribe(message => this.message = message);
    this.viewTestsService.sharedModelMessage.subscribe(modelMessage => this.modelMessage = modelMessage);
    this.currTask = this.message[0];
  }

  ngAfterViewInit() {
    this.nextButton.nativeElement.focus();
  }

  nextTask() {
    const index = this.message.indexOf(this.currTask);
    this.currTask = this.message[index + 1];

    if (!this.currTask) {
      this.nextButton.nativeElement.disabled = true;
    }
  }

  embedWebsite() {
    const newIframe = document.createElement('iframe');
    newIframe.id = 'websiteIframe';
    newIframe.src = this.modelMessage;

    document.getElementById('websiteIframe').replaceWith(newIframe);
  }

  finishRecording() {
    this.screenRecordingComponent.finishRecording();
  }
}
