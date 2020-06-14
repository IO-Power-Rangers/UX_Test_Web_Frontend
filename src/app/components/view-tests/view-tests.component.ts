import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ViewTestsService} from '../../services/view-tests.service';
import {Test} from '../../../interfaces/test';
import {Router} from '@angular/router';
import {CdkDragDrop, CdkDropList, DragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
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
  groupedTests: Array<Array<GroupedTest>>;
  newTests: Array<Array<GroupedTest>>;
  counter: number;

  constructor(private titleService: Title, private viewTestsService: ViewTestsService, private router: Router,
              private userService: UserService, public exportButton: ExportButtonComponent) {
    this.titleService.setTitle('View your tests');
    this.groups = [];
    this.counter = 0;
    this.groupedTests = [];
    this.newTests = [[]];
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
    let added = false;
    this.groups = [{id: 1, name: 'name1'}, {id: 2, name: 'name2'}, {id: 3, name: 'name1'}];
    this.names = ['name1', 'name2'];
    let index = 0;
    for (const name of this.names) {
      this.groupedTests.push([]);
      for (const group of this.groups) {

        if (group.name === name) {
          for (const test1 of this.tests) {
            if (group.id === test1.id) {
              const newGropedTest = {test: test1, name: group.name};
              this.groupedTests[index].push(newGropedTest);
            }
          }
        }

      }
      index += 1;
    }

    for (const test1 of this.tests) {
      for (const group of this.groups) {

        if (test1.id === group.id) {
          added = true;
        }

      }

      if (!added) {
        this.newTests[0].push({test: test1, name: ''});
      }
      added = false;
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
    console.log(this.groupedTests);
    console.log(this.newTests);
    console.log('  ');
  }

  addGroup() {
    const name1 = 'new group ' + this.counter;
    this.names.push(name1);
    this.counter += 1;
  }

  submitGroups() {
    /*// TODO: update names
    for (const name of this.names) {
      for (const test of this.groupedTests) {
        if (test.name === name) {
          this.viewTestsService.putGroup({id: test.test.id, name: test.name});
        }
      }
      for (const test of this.newTests) {
        if (test.name === name) {
          this.viewTestsService.postGroup({id: test.test.id, name: test.name});
        }
      }
    }*/
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

