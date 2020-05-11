import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ViewTestsService} from '../../services/view-tests.service';
import {Test} from '../../../interfaces/test';
import {Task} from '../../../interfaces/task';


@Component({
  selector: 'app-view-tests',
  templateUrl: './view-tests.component.html',
  styleUrls: ['./view-tests.component.css']
})
export class ViewTestsComponent implements OnInit {

  tests: Test[];

  constructor(private titleService: Title, private viewTestsService: ViewTestsService) {
    this.titleService.setTitle('View your tests');
    this.showTest();
  }

  ngOnInit(): void {
  }


  showTest() {
    this.viewTestsService.getTest()
      .subscribe((data: Test[]) => {
        this.tests = data;
        console.log(this.tests);
      });
  }

  startTest() {
    console.log('Hello');
  }
}

