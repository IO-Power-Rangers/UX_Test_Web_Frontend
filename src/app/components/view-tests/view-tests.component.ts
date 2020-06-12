import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ViewTestsService} from '../../services/view-tests.service';
import {Test} from '../../../interfaces/test';
import {Task} from '../../../interfaces/task';
import {Router, Routes} from '@angular/router';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {UserService} from '../../services/user.service';
import {ExportButtonComponent} from '../export-button/export-button.component';
import {TestGroup} from '../../../interfaces/testGroup';

@Component({
  selector: 'app-view-tests',
  templateUrl: './view-tests.component.html',
  styleUrls: ['./view-tests.component.css'],
})

export class ViewTestsComponent implements OnInit {

  tests: Test[];
  testIDs: number[];
  groups: TestGroup[];
  message: Test;

  constructor(private titleService: Title, private viewTestsService: ViewTestsService, private router: Router,
              private userService: UserService, public exportButton: ExportButtonComponent) {
    this.titleService.setTitle('View your tests');
    this.showTest();
  }

  ngOnInit(): void {
    this.viewTestsService.sharedMessage.subscribe(message => this.message = message);
  }


  showTest() {
    this.viewTestsService.getTest()
      .subscribe((data: Test[]) => {
        this.tests = data.filter(test => test.creator.id === 1); // this.userService.getUser().id);
      },
        (err) =>  console.error(err),
        () => {
        this.testIDs = [];
        for (const test of this.tests) {
          this.testIDs.push(test.id);
        }
        this.showGroup(); });
  }

  showGroup() {
    this.viewTestsService.getGroup()
      .subscribe((data: TestGroup[]) => {
        this.groups = data.filter(group => group.id in this.testIDs);
      });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tests, event.previousIndex, event.currentIndex);
  }


  startTest(test) {
    this.message = test;
    this.viewTestsService.nextMessage(this.message);
    this.router.navigate(['/doTest']);
  }

  viewRecordings(test) {
    this.router.navigate(['/recordingsView/', test.id]);
  }


}

