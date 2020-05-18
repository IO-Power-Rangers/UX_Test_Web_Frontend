import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ViewTestsService} from '../../services/view-tests.service';
import {Test} from '../../../interfaces/test';
import {Task} from '../../../interfaces/task';
import {Router, Routes} from '@angular/router';
import {RecordingPermissionViewComponent} from '../recording-permission-view/recording-permission-view.component';

const routes: Routes = [
  {path: 'screenRecording', component: RecordingPermissionViewComponent},
];

@Component({
  selector: 'app-view-tests',
  templateUrl: './view-tests.component.html',
  styleUrls: ['./view-tests.component.css'],
})

export class ViewTestsComponent implements OnInit, AfterViewInit {

  tests: Test[];
  message: Task[];
  @ViewChild('select') select: ElementRef;
  modelMessage: string;

  constructor(private titleService: Title, private viewTestsService: ViewTestsService, private router: Router) {
    this.titleService.setTitle('View your tests');
    this.showTest();
  }

  ngOnInit(): void {
    this.viewTestsService.sharedMessage.subscribe(message => this.message = message);
    this.viewTestsService.sharedModelMessage.subscribe(modelMessage => this.modelMessage = modelMessage);
  }

  ngAfterViewInit() {
    this.select.nativeElement.focus();
  }


  showTest() {
    this.viewTestsService.getTest()
      .subscribe((data: Test[]) => {
        this.tests = data;
      });
  }

  startTest() {
    const selected = this.select.nativeElement.options[this.select.nativeElement.selectedIndex].text;

    const titleArr = [];
    const iterator = this.tests.values();
    for (const test of iterator) {
      titleArr.push(test.title);
    }

    if (selected in titleArr) {
      const test = this.tests.find(i => i.title === selected);
      this.message = test.tasks;
      this.modelMessage = test.uxModel.axLink;
      this.viewTestsService.nextMessage(this.message, this.modelMessage);
      this.router.navigate(['/screenRecording']);
    }
  }


}

