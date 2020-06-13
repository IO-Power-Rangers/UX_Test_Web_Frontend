import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ViewTestsService} from '../../services/view-tests.service';
import {Test} from '../../../interfaces/test';
import {Router} from '@angular/router';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {UserService} from '../../services/user.service';
import {ExportButtonComponent} from '../export-button/export-button.component';
import {TestGroup} from '../../../interfaces/testGroup';
import {GroupedTest} from './groupedTest';

@Component({
  selector: 'app-view-tests',
  templateUrl: './view-tests.component.html',
  styleUrls: ['./view-tests.component.css'],
})

export class ViewTestsComponent implements OnInit {

  tests: Test[];
  testIDs: number[];
  names: string[];
  groups: TestGroup[];
  message: Test;
  groupedTests: GroupedTest[];
  newTests: GroupedTest[];
  ungroupedTests: GroupedTest[];

  constructor(private titleService: Title, private viewTestsService: ViewTestsService, private router: Router,
              private userService: UserService, public exportButton: ExportButtonComponent) {
    this.titleService.setTitle('View your tests');
    this.groups = [];
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
      },
        (err) => console.error(err),
        () => {
          this.names = [];
          for (const group of this.groups) {
            if (!(group.name in this.names)) {
              this.names.push(group.name);
            }
          }
          this.groupTests();
        });
  }

  groupTests() {
    this.groupedTests = [];
    this.newTests = [];
    this.ungroupedTests = [];
    let added = false;
    if (this.groups.length !== 0) {
      for (const test1 of this.tests) {
        for (const group of this.groups) {
          if (group.id === test1.id) {
            const newGropedTest = {test: test1, name: group.name};
            this.groupedTests.push(newGropedTest);
            added = true;
          }
        }
        if (added === false) {
          const newGropedTest = {test: test1, name: ''};
          this.newTests.push(newGropedTest);
        }
        added = false;
      }
    } else {
      for (const test1 of this.tests) {
        const newGropedTest = {test: test1, name: ''};
        this.ungroupedTests.push(newGropedTest);
      }
    }
  }

  drop(event: any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
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

