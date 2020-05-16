import {Component, OnInit} from '@angular/core';
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
  styleUrls: ['./view-tests.component.css']
})

export class ViewTestsComponent implements OnInit {

  tests: Test[];
  select: HTMLSelectElement;
  message: Task[];
  modelMessage: string;

  constructor(private titleService: Title, private viewTestsService: ViewTestsService, private router: Router) {
    this.titleService.setTitle('View your tests');
    this.showTest();
  }

  ngOnInit(): void {
    this.viewTestsService.sharedMessage.subscribe(message => this.message = message);
    this.viewTestsService.sharedModelMessage.subscribe(modelMessage => this.modelMessage = modelMessage);
  }


  showTest() {
    this.viewTestsService.getTest()
      .subscribe((data: Test[]) => {
        this.tests = data;
        console.log(data);
      });
  }

  startTest() {
    this.select = document.getElementById('testChoice') as HTMLSelectElement;
    const selected = this.select.options[this.select.selectedIndex].text;

    if ( selected !== 'Choose a test') {
      const test = this.tests.find(i => i.title === selected);
      this.message = test.tasks;
      this.modelMessage = test.uxModel.axLink;
      this.viewTestsService.nextMessage(this.message, this.modelMessage);
      this.router.navigate(['/screenRecording']);
    }
  }


}

